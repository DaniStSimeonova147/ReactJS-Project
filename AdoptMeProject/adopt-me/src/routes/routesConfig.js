import { Home } from '../components/Home/Home';
import { Login } from '../components/Login/Login';
import { Register } from '../components/Register/Register';
import { Logout } from '../components/Logout/Logout';
import { Catalog } from '../components/Catalog/Catalog';
import { PetDetails } from '../components/PetDetails/PetDetails';
import { CreatePet } from '../components/CreatePet/CreatePet';
import { EditPet } from '../components/EditPet/EditPet';
import { NotFound } from '../components/NotFound/NotFound';

import { PetOwner } from '../components/common/PetOwner';

export const routesConfig = [
    {
        path: '/',
        element: <Home />,
        gridSizes: { xs: 12, sm: 10, md: 8, lg: 6, xl: 6 },
        isAuthenticated: false
    },
    {
        path: '/login',
        element: <Login />,
        gridSizes: { xs: 8, sm: 8, md: 6, lg: 4, xl: 4 },
        isAuthenticated: false
    },
    {
        path: '/register',
        element: <Register />,
        gridSizes: { xs: 8, sm: 8, md: 6, lg: 4, xl: 4 },
        isAuthenticated: false
    },
    {
        path: '/catalog',
        element: <Catalog />,
        gridSizes: { xs: 10, sm: 10, md: 12, lg: 12, xl: 10 },
        isAuthenticated: false
    },
    {
        path: '/catalog/:petId',
        element: <PetDetails />,
        gridSizes: { xs: 10, sm: 10, md: 10, lg: 8, xl: 8 },
        isAuthenticated: false
    },
    {
        path: '*',
        element: <NotFound />,
        gridSizes: { xs: 10, sm: 8, md: 6, lg: 4, xl: 4 },
        isAuthenticated: false
    },
    {
        path: 'catalog/:petId/edit',
        element: (
            <PetOwner>
                <EditPet />
            </PetOwner>
        ),
        gridSizes: { xs: 10, sm: 8, md: 6, lg: 6, xl: 4 },
        isAuthenticated: true
    },
    {
        path: 'create-pet',
        element: <CreatePet />,
        gridSizes: { xs: 10, sm: 8, md: 6, lg: 6, xl: 4 },
        isAuthenticated: true
    },
    {
        path: 'logout',
        element: <Logout />,
        isAuthenticated: true
    },
];
