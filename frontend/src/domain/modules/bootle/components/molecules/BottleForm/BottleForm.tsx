import { useFormik } from "formik";
import AbstractForm from "../../../../../../core/modules/abstract/components/form/components/molecules/AbstractForm";
import Bottle from "../../../models/Bottle.model.ts";
import AbstractFormButton from "../../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormButton";
import AbstractFormTextField from "../../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormTextField";

interface BottleFormProps {
    bottle: Bottle;
    submitActionHandler: (values: Bottle) => void;
}
const BottleForm = ({ bottle, submitActionHandler } : BottleFormProps) => {
    const formik = useFormik({
        initialValues: bottle,
        onSubmit: submitActionHandler,
        enableReinitialize: true,
    })

    return (
        <AbstractForm formik={formik}>
            <AbstractFormTextField id="img"/>
            <AbstractFormTextField id="name"/>
            <AbstractFormTextField id="description"/>
            <AbstractFormTextField id="country"/>
            <AbstractFormTextField id="amount"/>
            <AbstractFormTextField id="rating"/>
            <AbstractFormButton>Save</AbstractFormButton>
        </AbstractForm>
    )
}
export default BottleForm;