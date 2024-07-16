import { Card, TextField, Typography } from "@mui/material";

import { styles } from "./styles";

export const CardStyled = ({ headerContent, children }) => {
    return (
        <>
            <Card sx={styles.form}>
                <Typography sx={styles.header}>
                    {headerContent}
                </Typography>
                {children}
            </Card>
        </>
    );
};

export const ErrorHandlingStyled = ({ field, form: { touched, errors }, ...props }) => (
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