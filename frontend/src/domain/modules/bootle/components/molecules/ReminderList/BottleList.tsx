import BottleCard from "../../atoms/BottleCard/BottleCard.tsx";
import Button from "@mui/material/Button";
import Bottle from "../../../models/Bottle.model.ts";
import {Grid} from "@mui/material";

type BottleListProps = {
    bottles : Bottle[];
    handleDelete : (val : string) => void;
    handleEdit : (val: string) => void;
    handleAdd : () => void;
}

const BottleList = ({ bottles, handleDelete, handleEdit, handleAdd } : BottleListProps) => {
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
            <Button
                size='small'
                color='success'
                variant='contained'
                onClick={handleAdd}
            >
                Add
            </Button>
                </Grid>
        </>
    )
}

export default BottleList;