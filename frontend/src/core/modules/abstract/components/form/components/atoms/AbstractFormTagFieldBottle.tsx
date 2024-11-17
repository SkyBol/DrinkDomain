import { useEffect, useState } from 'react';
import { useFormikContext, FormikProps } from 'formik';
import { TextField, Button, Chip, Typography, Autocomplete } from '@mui/material';
import BottleService from '../../../../../../../domain/modules/bootle/services/BottleService';
import Bottle from '../../../../../../../domain/modules/bootle/models/Bottle.model';

interface AbstractFormTagFieldProps {
    id: string;  
    formik?: FormikProps<any>;  
}

const AbstractFormTagField = ({ id, formik }: AbstractFormTagFieldProps) => {

    const context = formik || useFormikContext<any>();
    const { values, setFieldValue } = context;

    const [availableTags, setAvailableTags] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    useEffect(() => {
        const getBottles = async () => {
            const allBottles: Bottle[] = (await BottleService.getAll()).data;
            const tags = allBottles
                .map((bottle) => bottle.tags)
                .filter((tags) => !!tags)
                .flat();
            
            const withoutDuplicates = [...new Set(tags)];

            if (withoutDuplicates)
                setAvailableTags(withoutDuplicates.sort());
        }

        getBottles();
    }, []);
   
    const tags: string[] = values[id] || [];

    const handleInputChange = (_event: React.ChangeEvent<HTMLInputElement>, value: string) => {
        setInputValue(value);
    };

    const handleAddTag = () => {
        if (inputValue.trim() && !tags.includes(inputValue.trim())) {
            setFieldValue(id, [...tags, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleDeleteTag = (index: number) => {
        setFieldValue(id, tags.filter((_, i) => i !== index));
    };

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Autocomplete
                    options={availableTags}
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
                    onClick={handleAddTag}
                    style={{ marginLeft: "10px", marginBottom: "10px", height: '50px', backgroundColor: "#D4AF37" }}
                >
                    Add
                </Button>
            </div>

            <div style={{ marginTop: "20px", display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {tags.map((tag: string, index: number) => (
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
};

export default AbstractFormTagField;
