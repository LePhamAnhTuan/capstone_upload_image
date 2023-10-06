import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { https } from '../api/configAxios';
import { saveLocal } from '../utils/localStorage';
import { useOpenSnack } from '../common/snackBar/openSnack';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(3, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const Login = () => {
  const {openSnack}= useOpenSnack()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: 'test1@gmail.com',
      password: '123',
    },
    validationSchema: validationSchema,
     
    
    onSubmit:async (values: any) => {
      console.log('values: ', values);
      try {
        const res= await https.post("/login", values)
        console.log('res: ', res.data);
        saveLocal("user", res.data)
        openSnack("success", "Đăng nhập thành công")
        navigate('/')
        
      } catch (error) {
        
      }
     
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.errors.email && formik.touched.email?`${formik.errors.email}`:""}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && Boolean(formik.errors.password)? `${formik.errors.password}`:""}

        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login
