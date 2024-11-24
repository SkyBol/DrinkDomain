import { Paper, Grid } from '@mui/material';
import { useContext } from 'react';

import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import ActiveUserContext from '../../../contexts/ActiveUserContext';
import LoginForm from '../../molecules/LoginForm/LoginForm';

const validationSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const AdminLogin = () => {
    const paperStyle = {
        padding: 20,
        height: '50vh',
        width: 400,
        margin: '70px auto',
        backgroundColor: "#0c121a",
        color: "rgb(212, 175, 55)"
    };
    const navigate = useNavigate();
    const { login } = useContext(ActiveUserContext);

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: (values: { email: string, password: string }) => {
        login(values.email.toLowerCase(), values.password)
          .then(() => {
              navigate('/');
          })
          .catch(() => {
            alert('login Error');
          })
          .finally(() => {
            formik.setSubmitting(false);
          });
      },
      validationSchema: validationSchema,
      validateOnChange: true,
      enableReinitialize: true,
      isInitialValid: false,
    });

    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid style={{marginBottom: "50px"}}>
            <h2>Sign In</h2>
          </Grid>

          <LoginForm formik={formik} email={true} />
          <div style={{marginTop: "40px", backgroundColor: "#0c0d11", padding: "20px", borderRadius: "10px", width: "100%"}}>
            Bitte verwende das von Jan bereitgestellte Passwort, um dich einzuloggen. Da keine deiner Daten gespeichert werden, möchten wir dich bitten, freundlich und respektvoll zu agieren. Vielen Dank für dein Verständnis!
          </div>
        </Paper>
      </Grid>
    );
  };

export default AdminLogin;
