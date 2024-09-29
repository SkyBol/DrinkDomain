import * as fs from 'fs';
import {v4 as uuidv4} from 'uuid';


const json = JSON.parse(fs.readFileSync(new URL('./drinks_202409141636.json', import.meta.url)))


const prepareIngredient = (ingredients, cocktail, ingredient, measure) => {
    if (ingredient !== null) {
        ingredients.push({
            id: uuidv4(),
            cocktail_id: cocktail.id,
            bottleStringAlternative: ingredient,
            amount: measure,
        })
    }
}

const mappedJson = json.map((cocktail) => {
    let newCocktail = {}
    let categories = []
    let ingredients = []

    newCocktail.id = uuidv4()
    newCocktail.name = cocktail.strDrink
    newCocktail.img_id = null
    newCocktail.glass = cocktail.strGlass
    newCocktail.alcoholic = cocktail.strAlcoholic === "Alcoholic"
    newCocktail.instructions = cocktail.strInstructions

    prepareIngredient(ingredients, newCocktail, cocktail.strIngredient1, cocktail.strMeasure1)
    prepareIngredient(ingredients, newCocktail, cocktail.strIngredient2, cocktail.strMeasure2)
    prepareIngredient(ingredients, newCocktail, cocktail.strIngredient3, cocktail.strMeasure3)
    prepareIngredient(ingredients, newCocktail, cocktail.strIngredient4, cocktail.strMeasure4)
    prepareIngredient(ingredients, newCocktail, cocktail.strIngredient5, cocktail.strMeasure5)
    prepareIngredient(ingredients, newCocktail, cocktail.strIngredient6, cocktail.strMeasure6)
    prepareIngredient(ingredients, newCocktail, cocktail.strIngredient7, cocktail.strMeasure7)
    prepareIngredient(ingredients, newCocktail, cocktail.strIngredient8, cocktail.strMeasure8)
    prepareIngredient(ingredients, newCocktail, cocktail.strIngredient9, cocktail.strMeasure9)
    prepareIngredient(ingredients, newCocktail, cocktail.strIngredient10, cocktail.strMeasure10)
    prepareIngredient(ingredients, newCocktail, cocktail.strIngredient11, cocktail.strMeasure11)
    prepareIngredient(ingredients, newCocktail, cocktail.strIngredient12, cocktail.strMeasure12)
    prepareIngredient(ingredients, newCocktail, cocktail.strIngredient13, cocktail.strMeasure13)
    prepareIngredient(ingredients, newCocktail, cocktail.strIngredient14, cocktail.strMeasure14)
    prepareIngredient(ingredients, newCocktail, cocktail.strIngredient15, cocktail.strMeasure15)
    
    newCocktail.category = categories
    newCocktail.ingredients = ingredients

    return newCocktail;
});


fs.writeFileSync("./drinks-parsed.json", JSON.stringify(mappedJson))


const cocktailInsert = `INSERT INTO "cocktail" ("id", "name", "img_id", "glass", "alcoholic", "instructions") VALUES`
const cocktailValues = mappedJson.map((cocktail) => {
    return `('${cocktail.id}', '${cocktail.name.trim().replace(/\\/g, "").replace(/'/g, "''")}', ${cocktail.img_id ? `'${cocktail.img_id}'` : null}, '${cocktail.glass.trim().replace(/\\/g, "").replace(/'/g, "''")}', ${cocktail.alcoholic}, '${cocktail.instructions.trim().replace(/\\/g, "").replace(/'/g, "''")}')`
}).join(',\n')
const cocktailScript = `${cocktailInsert} ${cocktailValues};`

const ingredientsInsert = `INSERT INTO "ingredient" ("id", "cocktail_id", "bottle_string_alternative", "amount") VALUES`
const ingredientsValues = mappedJson.map((cocktail) => {
    return cocktail.ingredients.map((ingredient) => {
        return `('${ingredient.id}', '${ingredient.cocktail_id}', '${ingredient.bottleStringAlternative.trim()}', '${ingredient.amount}')`
    }).join(',\n')
}).join(',\n')
const ingredientScript = `${ingredientsInsert} ${ingredientsValues};`


const script = `${cocktailScript}\n\n${ingredientScript}`


fs.writeFileSync("./cocktails.sql", script)

