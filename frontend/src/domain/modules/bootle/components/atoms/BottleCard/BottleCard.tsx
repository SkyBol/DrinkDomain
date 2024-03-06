import Bottle from "../../../models/Bottle.model.ts";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import AbstractCardTitle from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardTitle.tsx";
import AbstractCardBody from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardBody.tsx";
import AbstractCardAmount from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardAmount.tsx";
import AbstractCardRating from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardRating.tsx";
import AbstractCardType from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardType.tsx";
import { useNavigate } from "react-router-dom";
import BottleType from "../../../models/BottleTypes.model.ts";
import ImageService from "../../../services/ImageService.ts";
import { useState } from "react";

interface BottleCardProps {
    bottle: Bottle;
}

const BottleCard= ({ bottle }:BottleCardProps) => {
    const navigate = useNavigate();

    const [imageURL, setImageURL] = useState<string | null>(null);

    const handleClick = async () => {
        console.log("This is the bottleName "+bottle.img)
        navigate(`/bottles/detail/${bottle.id}`);
        try {

            const response = await ImageService.get(bottle.img);
            const fetchedImageURL = response.data;

            if (typeof fetchedImageURL === "string") {

                setImageURL(fetchedImageURL);
            } else {
                console.error("Error: Image URL is not a string.");
            }
            navigate(`/bottles/detail/${bottle.id}`);
        } catch (error) {
            console.error("Error fetching image:", error);
        }
    };

    return (
        <Card key={bottle.id} style={{ width: 220, height: 360 }} onClick={handleClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    width="140"
                    image={imageURL}
                    alt="default bottle"
                />
                <CardContent>
                    <AbstractCardTitle>{bottle.name}</AbstractCardTitle>
                    <AbstractCardType country={bottle.country}>{bottle.type}</AbstractCardType>
                    <AbstractCardBody>{bottle.description}</AbstractCardBody>
                    <AbstractCardAmount amount={bottle.amount} />
                    <AbstractCardRating rating={bottle.rating} type={bottle.type as BottleType} />
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default BottleCard;
