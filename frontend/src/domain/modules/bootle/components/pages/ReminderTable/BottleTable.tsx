import { useEffect, useState } from "react";
import Bottle from "../../../models/Bottle.model.ts";
import BottleService from "../../../services/BottleService.ts";

import BottleList from "../../molecules/ReminderList/BottleList.tsx";
import {useNavigate} from "react-router-dom";


const BottleTable = () => {
    const navigate = useNavigate();
    const [bottles, setBottles] = useState<Bottle[]>([])

    useEffect(() => {
        BottleService.getAll().then((res) => {
            console.log(res)
            setBottles(res.data);
        });
    }, []);

    const handleAdd = () => {
        navigate('/bottles/add');
    };
    const handleEdit = (id: string) => {
        console.log("Does the Edit work"+id)
        navigate('/bottles/' + id);
    };
    const handleDelete = (id: string) => {
        BottleService.delete(id);
        setBottles(bottles.filter((ele) => ele.id !== id))
    };

    return (
        <BottleList
            bottles={bottles}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleAdd={handleAdd}
            />
    )
}

export default BottleTable;