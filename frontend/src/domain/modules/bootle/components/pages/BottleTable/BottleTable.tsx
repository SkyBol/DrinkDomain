import { useEffect, useState } from "react";
import Bottle from "../../../models/Bottle.model.ts";
import BottleService from "../../../services/BottleService.ts";

import BottleList from "../../molecules/ReminderList/BottleList.tsx";



const BottleTable = () => {

    const [bottles, setBottles] = useState<Bottle[]>([])

    useEffect(() => {
        BottleService.getAll().then((res) => {
            console.log(res)
            setBottles(res.data);
        });
    }, []);


    return (
        <div style={{padding:15}}>
        <BottleList
            bottles={bottles}
            />
        </div>
    )
}

export default BottleTable;