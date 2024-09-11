import * as Yup from 'yup';

export const registerSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email format!')
        .required('Email is required!'),
    password: Yup.string()
        .test('password-strength', function (value) {
            const errors = [];
            if (!value) {
                errors.push('Password is required!');
            } else {
                if (value.length < 6) {
                    errors.push('Password must be more than 6 symbols!');
                }
                if (!/[a-z]/.test(value)) {
                    errors.push('Must contain one lowercase!');
                }
                if (!/[A-Z]/.test(value)) {
                    errors.push('Must contain one uppercase!');
                }
            }
            return errors.length > 0 ? this.createError({ message: errors.join('\n ') }) : true;
        }),
    confirmPassword: Yup.string()
        .required('Repeat password is required!')
        .oneOf([Yup.ref('password')], 'Passwords must match!')
});