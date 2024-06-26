import { Routes, Route } from 'react-router-dom';

import { Grid } from '@mui/material';

import { routesConfig } from '../routes/routesConfig';
import { RouteGuard } from '../components/common/RouteGuard';


export const Routing = () => {
  return (
    <Grid item container justifyContent="center" pt={20} pb={20}>
      <Routes>
        {routesConfig.map((route, index) =>
          route.isAuthenticated ? (
            <Route
              key={index}
              path={route.path}
              element={
                <RouteGuard>
                  <Grid {...route.gridSizes}>{route.element}</Grid>
                </RouteGuard>
              }
            />
          ) : (
            <Route
              key={index}
              path={route.path}
              element={<Grid {...route.gridSizes}>{route.element}</Grid>}
            />
          )
        )}
      </Routes>
    </Grid>
  );
};
