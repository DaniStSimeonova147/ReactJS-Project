import { Grid, Typography } from '@mui/material';

import { CatalogItem } from './CatalogItem/CatalogItem';
import { usePetContext } from '../../contexts/PetContext';

export const Catalog = () => {
    const { pets } = usePetContext();

    return (
        <Grid
            container
            margin="auto"
            justifyContent="center"
            sx={{ mt: 15, mb: 15 }}>
            {pets.length > 0 ? (
                pets.map(x => (
                    <Grid item xs={10} sm={6} md={5} lg={4} xl={2} key={x.id} margin="8px">
                        <CatalogItem {...x} />
                    </Grid>
                ))
            ) : (
                <Grid item xs={8}>
                    <Typography variant="h3" align="center">
                        No pets posts yet.
                    </Typography>
                </Grid>
            )}
        </Grid >
    );
};