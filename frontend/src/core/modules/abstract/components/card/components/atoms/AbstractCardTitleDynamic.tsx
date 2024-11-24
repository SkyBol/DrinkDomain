import { Typography } from "@mui/material";
import { AutoTextSize } from 'auto-text-size'

interface AbstractCardTitleDynamicProps {
    name?: string;
    width: string;
    height: string;
    children ?: any;
}

const AbstractCardTitleDynamic = ({ name, children, width, height } : AbstractCardTitleDynamicProps) => {
    
    return (
        <Typography
            variant="h4"
            component="div"
            style={{
                height: height,
                width: width,
                overflow: "hidden"
            }}
        >
            <AutoTextSize minFontSizePx={10} maxFontSizePx={40} mode={"box"}>
                {name ?? ""}{children ?? ""}
            </AutoTextSize>
        </Typography>
    )
}

export default AbstractCardTitleDynamic;