import { FormikProps, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import Bottle from "../../../../../../../domain/modules/bootle/models/Bottle.model";
import { Autocomplete } from "@mui/material";
import BottleService from "../../../../../../../domain/modules/bootle/services/BottleService";

interface AbstractFormListIngredientProps {
    id: string;  
    formik?: FormikProps<any>;  
}

const AbstractFormListIngredient = ({ id, formik }: AbstractFormListIngredientProps) => {
    const context = formik || useFormikContext<any>();
    const { values, setFieldValue } = context;

    const [availableBottles, setAvailableBottles] = useState<Bottle[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    const ingredients: string[] = values[id] || [];

    useEffect(() => {
        const getBottles = async () => {
            const allBottles = await BottleService.getAll()
        }

        getBottles();
    }, []);

    const handleAddIngredient = () => {
        if (inputValue.trim() && !availableBottles.includes(inputValue.trim())) {
            setFieldValue(id, [...categories, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleDeleteIngredient = (index: number) => {
        setFieldValue(id, categories.filter((_, i) => i !== index));
    };

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Autocomplete
                    options={availableBottles}
                    style={{width: "100%"}}
                    value={inputValue}
                    onChange={handleInputChange}
                    onInputChange={handleInputChange}
                    renderInput={(props) =>
                        <TextField
                            {...props}
                            label="Enter Tag"
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
                <Button
                    variant="contained"
                    onClick={handleAddCategory}
                    style={{ marginLeft: "10px", marginBottom: "10px", height: '50px', backgroundColor: "#D4AF37" }}
                >
                    Add
                </Button>
            </div>

            <div style={{ marginTop: "20px", display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {categories.map((tag: string, index: number) => (
                    <Chip
                        key={index}
                        label={tag}
                        onDelete={() => handleDeleteTag(index)}
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
