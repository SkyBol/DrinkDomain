import { FormikProps } from 'formik';
import React from 'react';
//import TextField from '../atoms/TextField';

type AbstractFormParams = {
    children : React.ReactElement | React.ReactElement[];
    //onSubmit : (e : any) => void;
    formik : FormikProps<any>;
}


const AbstractForm = ({children, formik} : AbstractFormParams) => {
    const loadChildren = () => {
        if (Array.isArray(children)) {
            return (children as React.ReactElement[]).map((child) => {
                return React.cloneElement(child, {
                    formik: formik,
                    key: child.props.id,
                });
            });
        } else {
            return React.cloneElement(children, {
                formik: formik,
            });
        }
    }

    return (
        <div>
            {
                loadChildren()
            }
        </div>
    )
}

export default AbstractForm;