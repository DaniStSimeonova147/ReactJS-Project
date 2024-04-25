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
        isAuthenticated: false
    },
    {
        path: '/login',
        element: <Login />,
        isAuthenticated: false
    },
    {
        path: '/register',
        element: <Register />,
        isAuthenticated: false
    },
    {
        path: '/catalog',
        element: <Catalog />,
        isAuthenticated: false
    },
    {
        path: '/catalog/:petId',
        element: <PetDetails />,
        isAuthenticated: false
    },
    {
        path: '*',
        element: <NotFound />,
        isAuthenticated: false
    },
    {
        path: 'catalog/:petId/edit',
        element: (
            <PetOwner>
                <EditPet />
            </PetOwner>
        ),
        isAuthenticated: true
    },
    {
        path: 'create-pet',
        element: <CreatePet />,
        isAuthenticated: true
    },
    {
        path: 'logout',
        element: <Logout />,
        isAuthenticated: true
    },
];
