import { useFormik } from "formik";
import AbstractForm from "../../../../../core/modules/abstract/components/form/components/molecules/AbstractForm";
import GuestbookService from "../../services/GuestbookService";
import AbstractFormTextField from "../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormTextField";
import { defaulGuestbookEntryForm, GuestbookEntryForm } from "../../models/GuestbookEntry.model";
import { useNavigate } from "react-router-dom";
import AbstractFormButton from "../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormButton";
import AbstractFormTextArea from "../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormBigTextArea";
import AbstractFormType from "../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormType";
import AbstractCardImgDrop from "../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardImgDrop";
import AbstractFormNumericField from "../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormNumericField";


export const GuestBookEntryPage = () => {
  const navigate = useNavigate();

  const createNewGuestBookEntry = (values: GuestbookEntryForm) => {
    

    GuestbookService.save(values).then(() => {
      navigate("/guestBook");
    });
  }

  const formik = useFormik<GuestbookEntryForm>({
    initialValues: defaulGuestbookEntryForm,
    
    onSubmit: createNewGuestBookEntry,
    enableReinitialize: true,
  });

  return (
    <div>
      <h2>Immortalise your Name inside this Guest Book!</h2>
      <AbstractForm formik={formik}>
        <AbstractFormTextField id="name" />
        <AbstractFormTextArea id="description" />
        <AbstractCardImgDrop id="picture_id" formik={formik} />
        <AbstractFormType id="bottle_id" />
        {
          !!formik.values.bottle_id
          ? <AbstractFormNumericField id="bottle_review" />
          : null
        }
        <AbstractFormButton/>
      </AbstractForm>
    </div>
  )
}

export default GuestBookEntryPage;