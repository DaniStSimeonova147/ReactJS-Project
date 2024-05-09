import * as Yup from 'yup';

export const petSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required!')
        .min(2, 'Name must be more than 2 symbols!'),
    type: Yup.string()
        .required('Type is required!')
        .min(2, 'Type must be more than 2 symbols!'),
    age: Yup.number()
        .min(0, 'Age must be positive!')
        .required('Age is required!'),
    description: Yup.string()
        .required('Description is required!')
        .min(6, 'Description must be more than 6 symbols!'),
    imageUrl: Yup.string()
        .required('Image is required!'),
    location: Yup.string()
        .required('Location is required!')
        .min(3, 'Location must be more than 3 symbols!'),
    contact: Yup.string()
        .required('Contact is required!')
        .min(5, 'Contact must be more than 5 symbols!'),
});