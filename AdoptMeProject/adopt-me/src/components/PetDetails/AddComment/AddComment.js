import { Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { commentSchema } from './validations';
import { CardStyled, ErrorHandlingStyled } from '../../CardStyled/CardStyled';

export const AddComment = ({ onCommentSubmit }) => {

    return (
        <CardStyled headerContent="Add a comment">
            <Formik
                initialValues={{ comment: '' }}
                validationSchema={commentSchema}
                onSubmit={(values, { resetForm }) => {
                    onCommentSubmit(values);
                    resetForm();
                }}
            >
                {() => (
                    <Form>
                        <Field
                            name='comment'
                            type='comment'
                            label='Comment'
                            component={ErrorHandlingStyled}
                            multiline
                            rows={3}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Add
                        </Button>
                    </Form>
                )}
            </Formik>
        </CardStyled>
    );
};