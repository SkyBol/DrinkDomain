import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


import BottleService from "../../../services/BottleService.ts";
import BottleForm from "../../molecules/BottleForm/BottleForm.tsx";
import Bottle, {defaultBottle} from "../../../models/Bottle.model.ts";

const BottlePage = () => {
    const navigate = useNavigate();
    const { bottleId } = useParams();
    const [bottle, setBottle] = useState<Bottle>(defaultBottle);

    useEffect(() => {
        return () => {
            if (bottleId) {
                BottleService.get(bottleId).then((res) => {
                    return setBottle(res.data);
                });
            }
        };
    }, [bottleId]);

    const submitActionHandler = (values: Bottle) => {
        if (bottleId === undefined) {
            BottleService.save(values).then(() => {
                navigate(-1);
            });
        } else {
            BottleService.update( values,values.id).then(() => {
                navigate(-1);
            });
        }
    };

    return <BottleForm bottle={bottle} submitActionHandler={submitActionHandler}/>;
};
export default BottlePage;
