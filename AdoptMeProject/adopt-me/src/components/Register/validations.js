import * as Yup from 'yup';
import { TextField } from '@mui/material';

export const registerSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email format!')
        .required('Email is required!'),
    password: Yup.string()
        .required('Password is required!')
        .min(4, 'Password must be more than 4 symbols!')
        .matches(/[a-z]/, "Must contain one lowercase!")
        .matches(/[A-Z]/, "Must contain one uppercase!"),
    confirmPassword: Yup.string()
        .required('Repeat password is required!')
        .oneOf([Yup.ref('password')], 'Passwords must match!')
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
