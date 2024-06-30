import { Link } from 'react-router-dom';
import { Card, CardMedia, Button, Typography } from '@mui/material';

export const NotFound = () => {
    return (
        <Card sx={{ textAlign: 'center' }}>
            <CardMedia
                component="img"
                image="/images/404pageLogo.gif" alt="404 not found gif"
            />
            <Typography variant="h5" >
                Error 404, page not found.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/"
                style={{ margin: '10px' }}
            >
                Return to Adopt ME
            </Button>
        </Card>
    );
};