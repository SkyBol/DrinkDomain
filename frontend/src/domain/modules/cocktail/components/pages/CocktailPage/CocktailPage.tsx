import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CocktailService from "../../../services/CocktailService";
import Cocktail, { defaultCocktail } from "../../../models/Cocktail.model";
import CocktailForm from "../../molecules/CocktailForm/CocktailForm";


const CocktailPage = () => {
    const navigate = useNavigate();
    const { cocktailId } = useParams();
    const [cocktail, setCocktail] = useState<Cocktail>(defaultCocktail);

    useEffect(() => {
        if (cocktailId) {
            CocktailService.get(cocktailId)
                .then((res) => {
                    setCocktail(res.data);
                })
                .catch((error) => {
                    console.error('Error fetching bottle details:', error);
                });
        }
    }, [cocktailId]);

    const submitActionHandler = async (values: Cocktail) => {
        try {
            if (cocktailId === undefined) {
                await CocktailService.save(values);
            } else {
                await CocktailService.update(values, values.id);
            }

            // Navigate back
            navigate("/bottles");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return <CocktailForm cocktail={cocktail} submitActionHandler={submitActionHandler} />;
}

export default CocktailPage;