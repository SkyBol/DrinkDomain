
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



interface BottleCardProps {
    bottle : Bottle;
}


// @ts-ignore
const BottleCard = ({ bottle, handleEdit, handleDelete } : BottleCardProps) => {
    const navigate = useNavigate();

    const handleClick =()=>{
        navigate(`/bottles/detail/${bottle.id}`)
    }
    return (
        <Card key={bottle.id} style={{width:220}}  onClick={handleClick}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                width="140"
                image={`/src/img/liquor/${bottle.img}`}
                alt="defeault bottle"
            />
            <CardContent>
                <AbstractCardTitle>{bottle.name}</AbstractCardTitle>
                <AbstractCardType country={bottle.country}>{bottle.type}</AbstractCardType>
                <AbstractCardBody>{bottle.description}</AbstractCardBody>
                <AbstractCardAmount amount={bottle.amount}/>
                <AbstractCardRating  rating={bottle.rating}/>
            </CardContent>
        </CardActionArea>
        </Card>
    );
}

export default BottleCard;