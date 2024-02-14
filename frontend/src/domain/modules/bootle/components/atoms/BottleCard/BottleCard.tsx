
import Bottle from "../../../models/Bottle.model.ts";
import {Card, CardActionArea, CardActions, CardContent, CardMedia} from "@mui/material";
import AbstractCardTitle
    from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardTitle.tsx";
import AbstractCardBody
    from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardBody.tsx";
import AbstractCardCountry
    from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardCountry.tsx";
import AbstractCardAmount
    from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardAmount.tsx";
import AbstractCardRating
    from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardRating.tsx";
import AbstractCard
    from "../../../../../../core/modules/abstract/components/card/components/molecules/AbstractCard.tsx";


interface BottleCardProps {
    bottle : Bottle;
    handleEdit : (val : string) => void;
    handleDelete : (val : string) => void;
}

const BottleCard = ({ bottle, handleEdit, handleDelete } : BottleCardProps) => {
    return (
        <Card key={bottle.id} style={{width:220}}>
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
                <AbstractCardBody>{bottle.description}</AbstractCardBody>
                <AbstractCardCountry country={bottle.country}/>
                <AbstractCardAmount amount={bottle.amount}/>
                <AbstractCardRating  rating={bottle.rating}/>
            </CardContent>
        </CardActionArea>
         <CardActions>
        <AbstractCard  handleDelete={handleDelete} handleEdit={handleEdit} id={bottle.id} children=""/>
        </CardActions>
        </Card>
    );
}

export default BottleCard;