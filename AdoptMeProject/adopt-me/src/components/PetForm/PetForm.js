import {Form, Field, ErrorMessage } from 'formik';
export const PetForm = ({buttonType}) => {
    {
        return (
            <Form>
                <p>
                    <Field
                        name="name"
                        type="text"
                        id="name"
                        placeholder="Name"
                    />
                    <ErrorMessage name="name" component="span" style={{ color: 'red' }} />
                </p>
                <p>
                    <Field
                        name="type"
                        type="text"
                        id="type"
                        placeholder="Type"
                    />
                    <ErrorMessage name="type" component="span" style={{ color: 'red' }} />
                </p>
                <p>
                    <Field
                        name="age"
                        type="number"
                        id="age"
                        placeholder="Age"
                    />
                    <ErrorMessage name="age" component="span" style={{ color: 'red' }} />
                </p>
                <p>
                    <Field
                        name="description"
                        as="textarea"
                        type="text"
                        id="description"
                        placeholder="Description"
                    />
                    <ErrorMessage name="description" component="span" style={{ color: 'red' }} />
                </p>
                <p>
                    <Field
                        name="imageUrl"
                        type="text"
                        id="imageUrl"
                        placeholder="Link to image"
                    />
                    <ErrorMessage name="imageUrl" component="span" style={{ color: 'red' }} />
                </p>
                <p>
                    <Field
                        name="location"
                        type="text"
                        id="location"
                        placeholder="Location"
                    />
                    <ErrorMessage name="location" component="span" style={{ color: 'red' }} />
                </p>
                <p>
                    <Field
                        name="contact"
                        type="text"
                        id="contact"
                        placeholder="Contacts (phone number, email...)"
                    />
                    <ErrorMessage name="contact" component="span" style={{ color: 'red' }} />
                </p>
                <button className="add-btn" type="submit">{buttonType}</button>
            </Form>
        )
    }
}