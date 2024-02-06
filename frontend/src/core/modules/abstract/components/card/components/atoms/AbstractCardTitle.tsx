import { Typography } from "@mui/material";

interface AbstractCardTitleProps {
    title ?: string;
    children ?: any;
}

const AbstractCardTitle = ({ title, children } : AbstractCardTitleProps) => {
    return (
        <Typography variant="h5" component="div">
            {title ?? ""}{children ?? ""}
        </Typography>
    )
}

export default AbstractCardTitle;