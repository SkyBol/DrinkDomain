import BottleCard from "../../atoms/BottleCard/BottleCard.tsx";
import Bottle from "../../../models/Bottle.model.ts";
import {Grid} from "@mui/material";

type BottleListProps = {
    bottles : Bottle[];
    handleDelete : (val : string) => void;
    handleEdit : (val: string) => void;
}

const BottleList = ({ bottles, handleDelete, handleEdit } : BottleListProps) => {
    return (
        <>
            <Grid container spacing={4} direction={"row"}>

            {bottles.map((bottle) => (
                <Grid item xs={3} key={bottle.id}>
                       <BottleCard
                           bottle={bottle}
                           handleEdit={handleEdit}
                           handleDelete={handleDelete}
                       />
                </Grid>
                ))}

                </Grid>
        </>
    )
}

export default BottleList;