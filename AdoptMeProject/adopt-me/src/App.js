import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { petServiceFactory } from './services/petService';
import { AuthProvider } from './contexts/AuthContext';

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login"
import { Register } from "./components/Register/Register"
import { Logout } from './components/Logout/Logout';
import { Catalog } from "./components/Catalog/Catalog"
import { CreatePet } from './components/CreatePet/CreatePet';
import { EditPet } from './components/EditPet/EditPet';
import { PetDetails } from './components/PetDetails/PetDetails';
import { Footer } from "./components/Footer/Footer";
import { withAuth } from './hoc/withAuth';

function App() {
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);
    const petService = petServiceFactory(); //auth.accessToken


    useEffect(() => {
        petService.getAll()
            .then(result => {
                setPets(result)
            })
    }, []);

    const onCreatePetSubmit = async (data) => {
        const newPet = await petService.create(data);
        setPets(state => [...state, newPet]);
        navigate('/catalog');
    }


    const onPetEditSubmit = async (values) => {
        const result = await petService.edit(values._id, values);

        setPets(state => state.map(x => x._id === values._id ? result : x));

        navigate(`/catalog/${values._id}`);
    };


    const EnhancedLogin = withAuth(Login);
    

    return (
        <AuthProvider>
            <div id="box">

                <Header />
                {/* <!-- Main Content --> */}
                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<EnhancedLogin />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/create-pet' element={<CreatePet onCreatePetSubmit={onCreatePetSubmit} />} />
                        <Route path='/catalog' element={<Catalog pets={pets} />} />
                        <Route path='/catalog/:petId' element={<PetDetails />} />
                        <Route path='/catalog/:petId/edit' element={<EditPet onPetEditSubmit={onPetEditSubmit} />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
