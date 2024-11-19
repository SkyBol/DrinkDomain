import { FormikProps, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import Bottle from "../../../../../../../domain/modules/bootle/models/Bottle.model";
import { Autocomplete, Button, Chip, TextField } from "@mui/material";
import BottleService from "../../../../../../../domain/modules/bootle/services/BottleService";
import { Ingredient } from "../../../../../../../domain/modules/cocktail/models/Cocktail.model";

interface AbstractFormListIngredientProps {
    id: string;  
    formik?: FormikProps<any>;  
}

const AbstractFormListIngredient = ({ id, formik }: AbstractFormListIngredientProps) => {
    const context = formik || useFormikContext<any>();
    const { values, setFieldValue } = context;

    const [availableBottles, setAvailableBottles] = useState<Bottle[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const [amountInputValue, setAmountInputValue] = useState<string>("");

    const availableBottlesString = availableBottles.map((bottle) => bottle.name);

    const ingredients: Ingredient[] = values[id] || [];

    useEffect(() => {
        const getBottles = async () => {
            const allBottles = await BottleService.getAll()
            setAvailableBottles(allBottles.data);
        }

        getBottles();
    }, []);

    const handleInputChange = (_event: React.ChangeEvent<HTMLInputElement>, value: string) => {
        setInputValue(value);
    };
    const handleAmountInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmountInputValue(event.target.value);
    };

    const handleAddIngredient = () => {
        if (inputValue.trim() && amountInputValue.trim()) {
            console.log("HERE")
            const bottle = availableBottles.find((bottle) => bottle.name === inputValue.trim())
            const ingredient: Ingredient = {
                bottle: bottle ? bottle : null,
                bottleStringAlternative: bottle ? null : inputValue.trim(),
                amount: amountInputValue.trim(),
                id: "",
            }

            setFieldValue(id, [...ingredients, ingredient]);
            setInputValue("");
            setAmountInputValue("");
        }
    };

    const handleDeleteIngredient = (index: number) => {
        setFieldValue(id, ingredients.filter((_, i) => i !== index));
    };

    const getIngredientName = (ingredient: Ingredient) => {
        if (ingredient.bottle) {
            return ingredient.bottle.name;
        } else {
            return ingredient.bottleStringAlternative;
        }
    }

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Autocomplete
                    options={availableBottlesString}
                    style={{width: "50%"}}
                    value={inputValue}
                    onChange={handleInputChange}
                    onInputChange={handleInputChange}
                    renderInput={(props) =>
                        <TextField
                            {...props}
                            label="Enter Ingredient"
                            variant="outlined"
                            style={{ marginBottom: "10px", flex: 1, width: "100%" }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    color: "#000",
                                    fontFamily: "Arial",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#5c5c5c",
                                    },
                                    "&.Mui-focused": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#D4AF37",
                                        },
                                    },
                                    "&:hover:not(.Mui-focused)": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "black",
                                        },
                                    },
                                },
                                "& .MuiInputLabel-outlined": {
                                    color: "#393635",
                                    "&.Mui-focused": {
                                        color: "#D4AF37",
                                    },
                                },
                            }}
                        />
                    }
                />
                <TextField
                    value={amountInputValue}
                    onChange={handleAmountInputChange}
                    label="Amount"
                    variant="outlined"
                    style={{ marginBottom: "10px", flex: 1, width: "50%" }}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            color: "#000",
                            fontFamily: "Arial",
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#5c5c5c",
                            },
                            "&.Mui-focused": {
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#D4AF37",
                                },
                            },
                            "&:hover:not(.Mui-focused)": {
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "black",
                                },
                            },
                        },
                        "& .MuiInputLabel-outlined": {
                            color: "#393635",
                            "&.Mui-focused": {
                                color: "#D4AF37",
                            },
                        },
                    }}
                />
                <Button
                    variant="contained"
                    onClick={handleAddIngredient}
                    style={{ marginLeft: "10px", marginBottom: "10px", height: '50px', backgroundColor: "#D4AF37" }}
                >
                    Add
                </Button>
            </div>

            <div style={{ marginTop: "20px", display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {ingredients.map((ingredient: Ingredient, index: number) => (
                    
                    <Chip
                        key={index}
                        label={`${getIngredientName(ingredient)} - ${ingredient.amount}`}
                        onDelete={() => handleDeleteIngredient(index)}
                        deleteIcon={
                            <span style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '16px',
                                height: '16px',
                                fontSize: '16px',
                                color: 'black'
                            }}>
                                &times; 
                            </span>
                        }
                    />
                ))}
            </div>
        </div>
    )
}

export default AbstractFormListIngredient;