import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { petServiceFactory } from "../../services/petService";
import { usePetContext } from "../../contexts/PetContext";

export const EditPet = () => {
    const {onPetEditSubmit} = usePetContext();
    const { petId } = useParams();
    const petService = useService(petServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        name: '',
        type: '',
        age: '',
        description: '',
        imageUrl: '',
        location: '',
        contact: '',
    }, onPetEditSubmit);

    useEffect(() => {
        petService.getOne(petId)
            .then(result => {
                changeValues(result);
            });
    }, [petId]);

    return (
        <section id="edit-page" className="auth">
            <div className="editPage">
                <h2>Edit pet</h2>
                {/* Start Edit Pet Form */}
                <form id="create" method="POST" onSubmit={onSubmit}>
                    <p>
                        <input value={values.name} onChange={changeHandler} type="text" id="name" name="name" placeholder="Name" />
                    </p>
                    <p>
                        <input value={values.type} onChange={changeHandler} type="text" id="type" name="type" placeholder="Type"  />
                    </p>
                    <p>
                        <input value={values.age} onChange={changeHandler} type="number" id="age" name="age"  placeholder="Age"  />
                    </p>
                    <p>
                        <textarea
                            value={values.description} onChange={changeHandler} type="text" id="description" name="description" placeholder="Description"

                        />
                    </p>
                    <p>
                        <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Link to image" />
                    </p>
                    <p>
                        <input value={values.location} onChange={changeHandler} type="text" id="location" name="location" placeholder="Location"/>
                    </p>
                    <p>
                        <input value={values.contact} onChange={changeHandler} type="text" id="contact" name="contact" placeholder="Contacts (phone number, email...)" />
                    </p>
                    {/* Edit Pet Button */}
                    <button class="edit-btn" type="submit">Edit Pet</button>
                </form>
            </div>
        </section>

    );
}
