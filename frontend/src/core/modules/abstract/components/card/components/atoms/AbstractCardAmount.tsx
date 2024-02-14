import { Typography } from "@mui/material";

interface AbstractCardAmountProps {
    amount ?: number;
}

const AbstractCardAmount = ({ amount} : AbstractCardAmountProps) => {
    return (
        <Typography variant="h8" component="div">
            Anzahl : {amount}
        </Typography>
    )
}

export default AbstractCardAmount;