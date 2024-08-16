import { useFormik } from "formik";
import AbstractForm from "../../../../../core/modules/abstract/components/form/components/molecules/AbstractForm";
import GuestbookService from "../../services/GuestbookService";
import AbstractFormTextField from "../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormTextField";
import GuestbookEntry, { defaultGuestbookEntry } from "../../models/GuestbookEntry.model";
import { useNavigate } from "react-router-dom";
import AbstractFormButton from "../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormButton";


export const GuestBookEntryPage = () => {
  const navigate = useNavigate();

  const createNewGuestBookEntry = (values: GuestbookEntry) => {
    GuestbookService.save(values).then(() => {
      navigate(-1);
    });
  }

  const formik = useFormik<GuestbookEntry>({
    initialValues: defaultGuestbookEntry,
    onSubmit: createNewGuestBookEntry,
    enableReinitialize: true,
  });

  return (
    <div>
      <h2>Immortalise your Name inside this Guest Book!</h2>
      <AbstractForm formik={formik}>
        <AbstractFormTextField id="name" />
        <AbstractFormButton/>
      </AbstractForm>
    </div>
  )
}

export default GuestBookEntryPage;