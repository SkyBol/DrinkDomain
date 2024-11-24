import { Button } from "@mui/material";
import { FormikProps } from "formik";


type AbstractFormButtonParams = {
    formik ?: FormikProps<any>;
    fullwidth ?: boolean;
    children ?: any;
    disabled ?: boolean;
}

const AbstractFormButton = ({formik, fullwidth, children, disabled} : AbstractFormButtonParams) => {
    if (formik === undefined) {
        throw new Error("formik has to be defined");
    }

    const disabledButton = !formik.isValid || formik.isSubmitting || !formik.dirty || disabled;

    return (
        <Button
            onClick={() => formik.handleSubmit()}
            style={{color: disabledButton ? "rgb(121, 99, 26)" : "rgb(227, 187, 56)", backgroundColor: "rgb(114, 88, 11)", marginTop: "10px"}}
            sx={{
                backgroundColor: '#3e8e41',
                '&:hover': {
                  backgroundColor: '#06af41',
                },
              }}
            variant='contained'
            fullWidth={fullwidth}
            disabled={disabledButton}
        >
            {
                children ?? "Save"
            }
        </Button>
    )
}

export default AbstractFormButton;