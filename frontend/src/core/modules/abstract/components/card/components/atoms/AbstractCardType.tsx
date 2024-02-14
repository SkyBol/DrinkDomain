import { Typography } from "@mui/material";

interface AbstractCardTypeProps {
    type ?: string;
    country ?: string;
    children ?: any;
}

const AbstractCardType = ({ type,country, children } : AbstractCardTypeProps) => {
    return (
        <Typography variant="h5" component="div">
            <img src={`https://www.worldometers.info/img/flags/${country}-flag.gif`} alt={"picture of the bottle"}
                 style={{width: 20, height: 20 ,paddingRight:5}}/>
            {type ?? ""}{children ?? ""}
        </Typography>
    )
}

export default AbstractCardType;