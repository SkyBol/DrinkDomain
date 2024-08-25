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
            options={Object.values(BottleType)} // Assuming BottleType is an enum
            autoHighlight
            value={initialValue}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={initialValue ? initialValue : "Choose a type"}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
            onChange={handleOnChange}
        />
    );
}

export default AbstractFormType;
