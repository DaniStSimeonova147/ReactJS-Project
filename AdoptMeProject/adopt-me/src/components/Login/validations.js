import * as Yup from 'yup';
import { TextField } from '@mui/material';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format!')
    .required('Email is required!'),
  password: Yup.string()
    .required('Password is required!')
});

export const ErrorHandling = ({ field, form: { touched, errors }, ...props }) => (
  <TextField
    {...field}
    {...props}
    error={touched[field.name] && !!errors[field.name]}
    helperText={touched[field.name] && errors[field.name]}
    fullWidth
    size="small"
    margin="dense"
  />
);