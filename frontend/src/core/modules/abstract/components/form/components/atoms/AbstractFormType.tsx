import { Autocomplete, TextField } from "@mui/material";
import BottleType from "../../../../../../../domain/modules/bootle/models/BottleTypes.model.ts";


type AbstractTypeParams = {
    id: string;
    formik?: any;
}

const AbstractFormType = ({ id, formik }: AbstractTypeParams) => {
    const handleOnChange = (event: React.ChangeEvent<{}>, value: string | null) => {
        formik.setFieldValue(id, value || '');
    };


    const initialValue = formik.values[id];

    return (
        <Autocomplete
            id={id}
            options={Object.values(BottleType)} 
            autoHighlight
            value={initialValue}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={initialValue ? initialValue : "Choose a type"}
                    inputProps={{
                        ...params.inputProps,
                       
                    }}
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
            )}
            onChange={handleOnChange}
        />
    );
}

export default AbstractFormType;
