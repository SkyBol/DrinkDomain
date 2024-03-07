import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


import BottleService from "../../../services/BottleService.ts";
import BottleForm from "../../molecules/BottleForm/BottleForm.tsx";
import Bottle, {defaultBottle} from "../../../models/Bottle.model.ts";
import ImageService from "../../../services/ImageService.ts";

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
        console.log("These are values"+values)
        if (bottleId === undefined) {

            ImageService.save(values.img)
            BottleService.save(values).then(() => {
                navigate(-1);
            });

        } else {
            ImageService.update(values.img,values.id)
            BottleService.update( values,values.id).then(() => {
                navigate(-1);
            });
        }
    };

    return <BottleForm bottle={bottle} submitActionHandler={submitActionHandler}/>;
};
export default BottlePage;
