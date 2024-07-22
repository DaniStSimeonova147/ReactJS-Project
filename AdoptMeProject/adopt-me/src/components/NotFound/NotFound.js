import { Link } from 'react-router-dom';
import { Box, Button, CardMedia, Container } from '@mui/material';
import { CardStyled } from '../CardStyled/CardStyled';

export const NotFound = () => {
    return (
        <Container component="main" maxWidth="sm" margin="auto">
            <CardStyled headerContent="Error 404, page not found!">
                <CardMedia
                    component="img"
                    image="/images/404pageLogo.gif" alt="404 not found gif"
                />
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/"
                    >
                        Return to Adopt ME
                    </Button>
                </Box>
            </CardStyled>
        </Container >
    );
};