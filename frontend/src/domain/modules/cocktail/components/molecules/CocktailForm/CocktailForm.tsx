import { useFormik } from "formik";
import Cocktail from "../../../models/Cocktail.model";
import styles from "../../../../bootle/components/molecules/BottleForm/BottleForm.module.css";
import AbstractFormTextField from "../../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormTextField";
import AbstractCardImgDrop from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardImgDrop";
import AbstractFormCheckbox from "../../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormCheckbox";
import AbstractFormButton from "../../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormButton";
import AbstractFormTextArea from "../../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormBigTextArea";
import AbstractFormTagFieldCocktail from "../../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormTagFieldCocktail";


interface CocktailFormProps {
    cocktail: Cocktail;
    submitActionHandler: (values: Cocktail) => void;
}

const CocktailForm = ({ cocktail, submitActionHandler }: CocktailFormProps) => {
    const formik = useFormik({
        initialValues: cocktail,
        onSubmit: submitActionHandler,
        enableReinitialize: true,
    });

    return (
        <div className={styles.bottleFormPage}>
            <h2 className={styles.title}>Add a Cocktail</h2>

            <div className={styles.addBottleForm}/>
            <div className={styles.formContent}>
                <div className={styles.formFields}>
                    <div className={styles.formField}>
                        <AbstractFormTextField id="name" formik={formik} />
                    </div>

                    <div className={styles.formField}>
                        <AbstractFormTextField id="glass" formik={formik} />
                    </div>

                    <div className={styles.formField}>
                        <AbstractFormCheckbox id="alcoholic" formik={formik} />
                    </div>

                    <div className={styles.formField}>
                        <AbstractFormTextArea id="instructions" formik={formik} />
                    </div>

                    <div className={styles.formField}>
                        <AbstractFormTagFieldCocktail id="category" formik={formik} />
                    </div>
                </div>

                <div className={styles.imageDrop}>
                    <AbstractCardImgDrop id="img_id" formik={formik} />
                </div>
            </div>

            <div className={styles.submitButton}>
                <AbstractFormButton formik={formik}>Save</AbstractFormButton>
            </div>
        </div>
    )
}

export default CocktailForm;
