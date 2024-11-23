import { useFormikContext, FormikProps } from "formik";
import { useEffect, useState } from "react";
import Cocktail from "../../../../../../../domain/modules/cocktail/models/Cocktail.model";
import CocktailService from "../../../../../../../domain/modules/cocktail/services/CocktailService";
import { Autocomplete, Button, Chip, TextField } from "@mui/material";


interface AbstractFormTagFieldProps {
    id: string;  
    formik?: FormikProps<any>;  
}

const AbstractFormTagField = ({ id, formik }: AbstractFormTagFieldProps) => {

    const context = formik || useFormikContext<any>();
    const { values, setFieldValue } = context;

    const [availableCategories, setAvailableCategories] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    useEffect(() => {
        const getCocktails = async () => {
            const allCocktails: Cocktail[] = (await CocktailService.getAll()).data;
            const categories = allCocktails
                .map((cocktail) => cocktail.category)
                .map((category) => category.map(a => a.name))
                .filter((category) => !!category)
                .flat();
            
            const withoutDuplicates = [...new Set(categories)];

            if (withoutDuplicates)
                setAvailableCategories(withoutDuplicates.sort());

            console.log(withoutDuplicates)
        }

        getCocktails();
    }, []);
   
    const categories: string[] = values[id] || [];

    const handleInputChange = (_event: React.ChangeEvent<HTMLInputElement>, value: string) => {
        setInputValue(value);
    };

    const handleAddCategory = () => {
        if (inputValue.trim() && !categories.includes(inputValue.trim())) {
            setFieldValue(id, [...categories, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleDeleteTag = (index: number) => {
        setFieldValue(id, categories.filter((_, i) => i !== index));
    };


    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Autocomplete
                    options={availableCategories}
                    style={{width: "100%"}}
                    value={inputValue}
                    onChange={handleInputChange}
                    onInputChange={handleInputChange}
                    renderInput={(props) =>
                        <TextField
                            {...props}
                            label="Enter Category"
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
    );
}

export default AbstractFormTagField;