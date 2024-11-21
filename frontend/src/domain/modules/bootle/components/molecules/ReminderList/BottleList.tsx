import BottleCard from "../../atoms/BottleCard/BottleCard.tsx";
import Bottle from "../../../models/Bottle.model.ts";
import {Grid} from "@mui/material";
import { useEffect, useState } from "react";

type BottleListProps = {
    bottles : Bottle[];
}

const BottleList = ({ bottles } : BottleListProps) => {
    const filter = bottles.map((n) => [n, n]).flat()

    return (
        <Grid container spacing={4} direction={"row"}>
            {filter.map((bottle) => (
                <Grid item xs={12} xl={2} key={bottle.id}>
                    <BottleCard
                        bottle={bottle}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default BottleList;