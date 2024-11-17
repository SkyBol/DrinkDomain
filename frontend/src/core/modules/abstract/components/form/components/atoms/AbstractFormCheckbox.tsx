import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

type AbstractFormCheckboxParams = {
  id: string;
  formik?: any;
  options?: any[];
  getOptionLabel?: (option: any) => string;
};

const AbstractFormCheckbox = ({ id, formik, options, getOptionLabel }: AbstractFormCheckboxParams) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const value = event.target.name;
    const currentValues = formik.values[id] || [];
    const newValues = checked
      ? [...currentValues, value]
      : currentValues.filter((item: string) => item !== value);

    formik.setFieldValue(id, newValues);
  };

  const initialValues = formik.values[id] || [];
  const checkboxOptions = options || [];
  const checkboxGetOptionLabel = getOptionLabel || ((option: any) => option);

  return (
    <FormGroup>
      {checkboxOptions.map((option, index) => {
        const label = checkboxGetOptionLabel(option);
        const isChecked = initialValues.includes(option);

        return (
          <FormControlLabel
            key={`${id}-${index}`}
            control={
              <Checkbox
                name={option}
                checked={isChecked}
                onChange={handleOnChange}
                sx={{
                  color: "#5c5c5c",
                  "&.Mui-checked": {
                    color: "#D4AF37",
                  },
                  "&:hover": {
                    color: "black",
                  },
                }}
              />
            }
            label={label}
            sx={{
              "& .MuiFormControlLabel-label": {
                color: "#393635",
                fontFamily: "Arial",
              },
            }}
          />
        );
      })}
    </FormGroup>
  );
};

export default AbstractFormCheckbox;
