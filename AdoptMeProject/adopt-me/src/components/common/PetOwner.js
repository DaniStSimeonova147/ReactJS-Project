import { useParams, Outlet, Navigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { usePetContext } from '../../contexts/PetContext';

export const PetOwner = ({
    children,
}) => {
    const { petId } = useParams();
    const { getPet } = usePetContext();
    const { userId } = useAuthContext();

    const currentPet = getPet(petId);

    if (currentPet && currentPet._ownerId !== userId) {
        return <Navigate to={`/catalog/${petId}`} replace />
    }

    return children ? children : <Outlet />
};