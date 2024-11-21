import { useNavigate } from "react-router-dom";
import Cocktail from "../../models/Cocktail.model";
import { Box, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import AbstractCardTitle from "../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardTitle";
import ImageService from "../../../bootle/services/ImageService";

export interface CocktailCardProps {
    cocktail: Cocktail;
}

export const CocktailCard = ({cocktail}: CocktailCardProps) => {
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            navigate(`/cocktail/detail/${cocktail.id}`);
        } catch (error) {
            console.error("Error navigating:", error);
        }
    };

    const getImageUrl = () => {
        if (cocktail.img_id && cocktail.img_id.startsWith("http")) {
            return cocktail.img_id;
        }

        return ImageService.imageUrl(cocktail.img_id);
    }

    return (
        <Card key={cocktail.id} style={{ width: 220, height: 360 }} onClick={handleClick}>
            <Box sx={{backgroundImage: "linear-gradient(176deg, rgb(114, 88, 11), rgb(121, 99, 26))"}}>
                <CardMedia
                    component="img"
                    height="240"
                    width="140"
                    image={getImageUrl()}
                    alt="default bottle"
                />
            </Box>
            <Box sx={{backgroundImage: "linear-gradient(120deg, #2a2e3f, #0c121a)", color: "rgb(212, 175, 55)", height: "100%"}}>
                <CardActionArea>
                    <CardContent>
                        <AbstractCardTitle>{cocktail.name}</AbstractCardTitle>
                    </CardContent>
                </CardActionArea>
            </Box>
        </Card>
    );
}

export default CocktailCard;