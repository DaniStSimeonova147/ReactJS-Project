import { useForm } from '../../hooks/useForm';
import { usePetContext } from '../../contexts/PetContext';

export const CreatePet = () => {
  const { onCreatePetSubmit } = usePetContext();

  const { values, changeHandler, onSubmit } = useForm({
    name: '',
    type: '',
    age: '',
    description: '',
    imageUrl: '',
    location: '',
    contact: '',
  }, onCreatePetSubmit);


  return (
    <section id="create-page" className="auth">
      <div className="createPage">
        <h2>Add pet</h2>
        {/* Start Add Pet Form */}
        <form id="create" method="POST" onSubmit={onSubmit}>
          <p>
            <input value={values.name} onChange={changeHandler} type="text" id="name" name="name" placeholder="Name" />
          </p>
          <p>
            <input value={values.type} onChange={changeHandler} type="text" id="type" name="type" placeholder="Type" />
          </p>
          <p>
            <input value={values.age} onChange={changeHandler} type="number" id="age" name="age" min="0" placeholder="Age" />
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
            <input value={values.location} onChange={changeHandler} type="text" id="location" name="location" placeholder="Location" />
          </p>
          <p>
            <input value={values.contact} onChange={changeHandler} type="text" id="contact" name="contact" placeholder="Contacts (phone number, email...)" />
          </p>
          {/* Add Pet Button */}
          <button className="add-btn" type="submit">
            Add Pet
          </button>
        </form>
      </div>
    </section>
  );
};
