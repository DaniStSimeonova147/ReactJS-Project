import { Grid, Typography } from '@mui/material';

import { CatalogItem } from './CatalogItem/CatalogItem';
import { usePetContext } from '../../contexts/PetContext';

export const Catalog = () => {
    const { pets } = usePetContext();

    return (
        <Grid container spacing={4} justifyContent="center">
            {pets.length > 0 ? (
                pets.map(x => (
                    <Grid item>
                        <CatalogItem {...x} />
                    </Grid>
                ))
            ) : (
                <Grid item xs={12}>
                    <Typography variant="h3" align="center">
                        No pets posts yet.
                    </Typography>
                </Grid>
            )}
        </Grid>
    );
};