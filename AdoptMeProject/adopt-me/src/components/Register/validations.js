import * as Yup from 'yup';

export const registerSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email format!')
        .required('Email is required!'),
    password: Yup.string()
        .required('Password is required!')
        .min(6, 'Contain at least 6 symbols!')
        .matches(/[a-z]/, "At least one lowercase!")
        .matches(/[A-Z]/, "At least one uppercase!"),
    confirmPassword: Yup.string()
        .required('Repeat password is required!')
        .oneOf([Yup.ref('password')], 'Passwords must match!')
});