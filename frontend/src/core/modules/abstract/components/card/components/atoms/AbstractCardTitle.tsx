import { Typography } from "@mui/material";

interface AbstractCardTitleProps {
    name ?: string;
    children ?: any;
}

const AbstractCardTitle = ({ name, children } : AbstractCardTitleProps) => {
    return (
        <Typography variant="h3" component="div">
            {name ?? ""}{children ?? ""}
        </Typography>
    )
}

export default AbstractCardTitle;