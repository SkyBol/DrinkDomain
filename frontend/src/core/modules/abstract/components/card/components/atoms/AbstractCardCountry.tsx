import { Autocomplete, TextField } from "@mui/material";
import Box from "@mui/material/Box";

type AbstractDropDownParams = {
    id: string;
    options: { code:string; label:string; }[]
    formik: any;
}
const AbstractFormDropDown = ({ id, options, formik }:AbstractDropDownParams) => {
    // @ts-ignore
    const handleOnChange = (event: React.ChangeEvent<{}>, value: { code: string; label: string } | null) => {
        formik.setFieldValue(id, value?.code || ''); // Set the selected country code as the formik field value
    };
    return (
        <Autocomplete
            id={id}
            options={options}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        alt=""
                    />
                    {option.label} ({option.code})
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a country"
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

export default AbstractFormDropDown;
