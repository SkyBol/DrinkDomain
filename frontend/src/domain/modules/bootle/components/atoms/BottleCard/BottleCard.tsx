import Bottle from "../../../models/Bottle.model.ts";
import { Box, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import AbstractCardTitle from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardTitle.tsx";
import AbstractCardAmount from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardAmount.tsx";
import AbstractCardRating from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardRating.tsx";
import AbstractCardType from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardType.tsx";
import { useNavigate } from "react-router-dom";
import BottleType from "../../../models/BottleTypes.model.ts";
import ImageService from "../../../services/ImageService.ts";

interface BottleCardProps {
    bottle: Bottle;
}

const BottleCard: React.FC<BottleCardProps> = ({ bottle }) => {
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            navigate(`/bottles/detail/${bottle.id}`);
        } catch (error) {
            console.error("Error navigating:", error);
        }
    };

    return (
        <Card key={bottle.id} style={{ width: 220, height: 440 }} onClick={handleClick}>
            <CardActionArea>
                <Box sx={{backgroundImage: "linear-gradient(176deg, rgb(114, 88, 11), rgb(121, 99, 26))"}}>
                    <CardMedia
                        component="img"
                        height="240"
                        width="140"
                        image={ImageService.imageUrl(bottle.img_id)}
                        alt="default bottle"
                    />
                </Box>
                <Box sx={{backgroundImage: "linear-gradient(120deg, #2a2e3f, #0c121a)", color: "rgb(212, 175, 55)"}}>
                    <CardContent>
                        <AbstractCardTitle>{bottle.name}</AbstractCardTitle>
                        <AbstractCardType country={bottle.country}>{bottle.type}</AbstractCardType>
                        <AbstractCardAmount amount={bottle.amount} />
                        <AbstractCardRating rating={bottle.rating} type={bottle.type as BottleType} />
                    </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    );
};

export default BottleCard;
