import { Routes, Route } from 'react-router-dom';

import { routesConfig } from '../routes/routesConfig';
import { RouteGuard } from '../components/common/RouteGuard';

export const Routing = () => {
  return (
    <Routes>
      {routesConfig.map((route, index) => (
        route.isAuthenticated
          ? <Route key={index} path={route.path} element={<RouteGuard>{route.element}</RouteGuard >} />
          : <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
};
