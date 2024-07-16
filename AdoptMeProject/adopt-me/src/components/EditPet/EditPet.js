import { Container } from '@mui/material';

import { PetForm } from '../PetForm/PetForm';
import { CardStyled } from '../CardStyled/CardStyled';

export const EditPet = () => {
    return (
        <Container component="main" maxWidth="md" margin="auto">
            <CardStyled headerContent="Edit Pet">
                <PetForm card="edit"></PetForm>
            </CardStyled>
        </Container>
    );
};