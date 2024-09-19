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

export const ErrorHandlingStyled = ({ field, form: { touched, errors }, ...props }) => {
    const errorText = touched[field.name] && errors[field.name];

    return (
        <TextField
            {...field}
            {...props}
            error={!!errorText}
            helperText={
                Array.isArray(errorText) ? (
                    errorText.map((err, index) => (
                        <span key={index} style={{ display: "block" }}>{err}</span>
                    ))
                ) : (
                    errorText // For single error string
                )
            }
            fullWidth
            size="small"
            margin="dense"
        />
    )
};