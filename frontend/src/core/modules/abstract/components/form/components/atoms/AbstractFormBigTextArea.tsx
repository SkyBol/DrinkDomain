import { FormikProps } from "formik";
import { TextField as TextFieldMui } from '@mui/material';


type AbstractTextAreaParams = {
    formik ?: FormikProps<any>;
    id : string;
    placeholder ?: string;
    fullWidth ?: boolean;
    required ?: boolean;
    autoFocus ?: boolean;
    disabled ?: boolean;
    type ?: string;
    resizable ?: boolean; // Add resizable prop
}

const AbstractFormTextArea = ({formik, id, placeholder, fullWidth, required, autoFocus, disabled, type, resizable = true} : AbstractTextAreaParams) => {
    if (formik === undefined) {
        throw new Error("formik has to be defined");
    }

    return (
        <TextFieldMui
            label={id}
            id={id}
            placeholder={placeholder ?? ""}
            fullWidth={fullWidth}
            required={required}
            autoFocus={autoFocus}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[id]}
            disabled={disabled}
            error={Boolean(formik.errors[id])}
            helperText={String(formik.errors[id] ?? "")}
            type={type}
            multiline={resizable} // Set multiline to true
            minRows={3} // Set minimum number of rows
            maxRows={10} // Set maximum number of rows
            inputProps={{ style: { resize: resizable ? 'vertical' : 'none' } }} // Set resize style based on resizable prop
        />
    )
}

export default AbstractFormTextArea;
