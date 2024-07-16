import { Container } from '@mui/material';

import { PetForm } from '../PetForm/PetForm';
import { CardStyled } from '../CardStyled/CardStyled';

export const CreatePet = () => {
  return (
    <Container component="main" maxWidth="md" margin="auto">
      <CardStyled headerContent="Create Pet">
        <PetForm card="create" ></PetForm>
      </CardStyled>
    </Container>
  );
};