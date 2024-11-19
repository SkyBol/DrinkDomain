import Bottle from "../../bootle/models/Bottle.model";

export type Cocktail = {
    id: string;
    name: string;
    img_id: string;
    glass: string;
    alcoholic: boolean;
    instructions: string;
    category: {name: string}[];
    ingredients: Ingredient[];
}

export default Cocktail;


export type Ingredient = {
    id: string;
    bottle: Bottle | null;
    bottleStringAlternative: string | null;
    amount: string;
}

export const defaultCocktail : Cocktail = {
    id: "",
    name: "",
    img_id: "",
    glass: "",
    alcoholic: false,
    instructions: "",
    category: [],
    ingredients: [],
}
