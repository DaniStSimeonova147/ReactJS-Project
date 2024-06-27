import { useForm } from '../../../hooks/useForm';

import { Button, Box, TextField } from '@mui/material';

export const AddComment = ({
    onCommentSubmit,
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        comment: ""
    }, onCommentSubmit);

    return (
        <Box>
            <Box onSubmit={onSubmit}>
                <TextField
                    labrl="Comment"
                    name="comment"
                    placeholder="Add new comment..."
                    multiline
                    rows={4}
                    value={values.comment}
                    onChange={changeHandler}
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2, mb: 3 }}
                >
                </TextField>
            </Box>
            <Button
                variant="contained"
                color="primary"
                type="submit"
            >
                Add Comment
            </Button>
        </Box>
    );
};