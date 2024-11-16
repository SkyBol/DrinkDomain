import { useNavigate } from "react-router-dom";
import Cocktail from "../../models/Cocktail.model";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
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
            <CardActionArea>
                <CardContent>
                    <CardMedia
                        component="img"
                        height="140"
                        width="140"
                        image={getImageUrl()}
                        alt="default bottle"
                    />
                    <AbstractCardTitle>{cocktail.name}</AbstractCardTitle>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CocktailCard;