import { Card, TextField, Typography } from "@mui/material";

import { styles } from "./styles";

export const CardStyled = ({ headerContetnt, children }) => {
    return (
        <>
            <Card sx={styles.form}>
                <Typography sx={styles.header}>
                    {headerContetnt}
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