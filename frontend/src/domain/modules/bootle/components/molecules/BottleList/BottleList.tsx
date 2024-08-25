import BottleCard from "../../atoms/BottleCard/BottleCard.tsx";
import Bottle from "../../../models/Bottle.model.ts";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

type BottleListProps = {
    bottles: Bottle[];
}

const BottleList = ({ bottles }: BottleListProps) => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));

    return (
        <Grid 
            container 
            spacing={4} 
            direction={"row"} 
            justifyContent={isXs ? "center" : "flex-start"}
        >
            {bottles.map((bottle) => (
                <Grid item xs="auto" key={bottle.id}>
                    <BottleCard bottle={bottle} />
                </Grid>
            ))}
        </Grid>
    )
}

export default BottleList;
