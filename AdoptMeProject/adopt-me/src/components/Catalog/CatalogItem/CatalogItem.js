import { Link } from 'react-router-dom';

import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

export const CatalogItem = ({
    id,
    name,
    type,
    imageUrl,
}) => {
    return (
        <Card >
            <CardMedia
                component="img"
                height="300"
                image={imageUrl}
                alt={name}
            />
            <CardContent>
                <Typography variant="h6" component="div">
                    Name: {name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Type: {type}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to={`/catalog/${id}`}
                        style={{ marginTop: '10px' }}
                    >
                        See details
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

