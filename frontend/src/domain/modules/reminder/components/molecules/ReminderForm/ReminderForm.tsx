import { useFormik } from "formik";
import AbstractForm from "../../../../../../core/modules/abstract/components/form/components/molecules/AbstractForm";
import Reminder from "../../../models/Reminder.model";
import AbstractFormButton from "../../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormButton";
import AbstractFormTextField from "../../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormTextField";

interface ReminderFormProps {
    reminder: Reminder;
    submitActionHandler: (values: Reminder) => void;
}

const ReminderForm = ({ reminder, submitActionHandler } : ReminderFormProps) => {
    const formik = useFormik({
        initialValues: reminder,
        onSubmit: submitActionHandler,
        enableReinitialize: true,
    })

    return (
        <AbstractForm formik={formik}>
            <AbstractFormTextField id="id"/>
            <AbstractFormTextField id="title"/>
            <AbstractFormTextField id="description"/>
            <AbstractFormTextField id="place"/>
            <AbstractFormButton />
        </AbstractForm>
    )
}

export default ReminderForm;