import { useFormik } from "formik";
import GuestbookService from "../../services/GuestbookService";
import AbstractFormTextField from "../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormTextField";
import { defaulGuestbookEntryForm, GuestbookEntryForm } from "../../models/GuestbookEntry.model";
import { useNavigate } from "react-router-dom";
import AbstractFormButton from "../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormButton";
import AbstractFormTextArea from "../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormBigTextArea";
import AbstractFormType from "../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormType";
import AbstractCardImgDrop from "../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardImgDrop";
import AbstractFormNumericField from "../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormNumericField";
import styles from './GuestBookEntryPage.module.css';

export const GuestBookEntryPage = () => {
  const navigate = useNavigate();

  // Function to handle form submission
  const createNewGuestBookEntry = (values: GuestbookEntryForm) => {
    GuestbookService.save(values).then(() => {
      navigate("/guestBook");
    });
  };

  // Initializing Formik for form handling
  const formik = useFormik<GuestbookEntryForm>({
    initialValues: defaulGuestbookEntryForm,
    onSubmit: createNewGuestBookEntry,
    enableReinitialize: true,
  });

  return (
    <div className={styles.guestBookEntryPage}>
      <h2 className={styles.title}>Welcome to the Guest Book!</h2>
      
      <div className={styles.guestBookForm}>
        
        <div className={styles.formFields}>
          <div className={styles.formField}>
            <AbstractFormTextField id="name" formik={formik} />
          </div>
  
          <div className={styles.formField}>
            <AbstractFormTextArea id="description" formik={formik} />
          </div>
  
          <div className={styles.shortFormField}>
            <AbstractFormType id="bottle_id" formik={formik} />
          </div>
  
          {formik.values.bottle_id && (
            <div className={styles.formField}>
              <AbstractFormNumericField id="bottle_review" formik={formik} />
            </div>
          )}
        </div>
        <div>
          <div className={styles.imageDrop}>
            <AbstractCardImgDrop id="picture_id" formik={formik} />
          </div>
          <div className={styles.submitButton}>
            <AbstractFormButton formik={formik} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestBookEntryPage;
