import Bottle from "../../../models/Bottle.model.ts";
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import AbstractCardTitle
    from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardTitle.tsx";
import AbstractCardBody
    from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardBody.tsx";
import AbstractCardAmount
    from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardAmount.tsx";
import AbstractCardRating
    from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardRating.tsx";
import AbstractCardType
    from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardType.tsx";
import {useNavigate} from "react-router-dom";
import BottleType from "../../../models/BottleTypes.model.ts";
import {useEffect, useState} from "react";

interface BottleCardProps {
    bottle: Bottle;
}

const BottleCard: React.FC<BottleCardProps> = ({ bottle }) => {
    const navigate = useNavigate();
    const [imageURL, setImageURL] = useState<string | undefined>(undefined);


    useEffect(() => {
        if (!bottle.img) return;

        const reader = new FileReader();
        const blob = new Blob([JSON.stringify(bottle.img)], { type: 'application/json' });
        reader.readAsDataURL(blob);
        reader.onload = function(event) {
            if(event !== null && event.target){
            const content = event.target.result;
            content && fetchData(content.toString()).then((res)=>(setImageURL(res)))
            }
        }
    }, [bottle.img]);
    const fetchData = async (content:string) => {
        try {
            const response = await fetch(content);
            const dataText = await response.text();
            const jsonString = dataText.toString();
            const jsonObject = JSON.parse(jsonString);
            return jsonObject.path
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleClick = async () => {
        try {
            navigate(`/bottles/detail/${bottle.id}`);
        } catch (error) {
            console.error("Error navigating:", error);
        }
    };

    return (
        <Card key={bottle.id} style={{ width: 220, height: 360 }} onClick={handleClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    width="140"
                    image={`http://localhost:8081/storage/${imageURL}`}
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
