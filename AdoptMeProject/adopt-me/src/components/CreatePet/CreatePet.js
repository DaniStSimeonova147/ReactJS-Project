import { Formik } from 'formik';
import { usePetContext } from '../../contexts/PetContext';

import { petSchema } from '../PetForm/validations';
import { PetForm } from '../PetForm/PetForm';

const initialValues = {
    name: '',
    type: '',
    age: '',
    description: '',
    imageUrl: '',
    location: '',
    contact: '',
}
export const CreatePet = () => {
    const { onCreatePetSubmit } = usePetContext();

    return (
        <section id="create-page" className="auth">
            <div className="createPage">
                <h2>Add pet</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={petSchema}
                    onSubmit={(values) => {
                        onCreatePetSubmit(values);
                    }}
                >
                    <PetForm buttonType="Add Pet"></PetForm>
                </Formik>
            </div>
        </section>
    );
}