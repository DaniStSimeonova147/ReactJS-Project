import * as Yup from 'yup';

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