import { useFormik } from "formik";
import AbstractForm from "../../../../../../core/modules/abstract/components/form/components/molecules/AbstractForm";
import Bottle from "../../../models/Bottle.model.ts";
import AbstractFormButton from "../../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormButton";
import AbstractFormTextField from "../../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormTextField";
import AbstractFormDropDown
    from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardCountry.tsx";
import {countryList} from "../../../models/Countries.model.ts";
import AbstractCardImgDrop
    from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardImgDrop.tsx";
import AbstractFormTextArea
    from "../../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormBigTextArea.tsx";
import AbstractFormType
    from "../../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormType.tsx";
import AbstractFormNumericField
    from "../../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormNumericField.tsx";



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
            <AbstractCardImgDrop id="img" image={bottle.img} formik={formik}/>
            <AbstractFormTextField id="name"/>
            <AbstractFormType id="type" formik={formik}/>
            <AbstractFormTextArea id="description"/>
            <AbstractFormDropDown
                id="country"
                options={countryList}
                formik={formik}/>
            <AbstractFormNumericField id="amount"/>
            <AbstractFormNumericField id="rating"/>
            <AbstractFormButton>Save</AbstractFormButton>
        </AbstractForm>
    )
}
export default BottleForm;