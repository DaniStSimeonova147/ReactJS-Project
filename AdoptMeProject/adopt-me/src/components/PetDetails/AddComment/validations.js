import * as Yup from 'yup';

export const commentSchema = Yup.object({
    comment: Yup.string()
        .required('Comment content required!')
        .min(5, 'Comment must be more than 5 symbols!')
});
