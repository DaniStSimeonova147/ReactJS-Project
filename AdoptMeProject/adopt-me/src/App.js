import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { petServiceFactory } from './services/petService';
import { authServiceFactory } from './services/authService';
import { AuthContext } from './contexts/AuthContext';
import { useService } from './hooks/useService';

import { CreatePet } from './components/CreatePet/CreatePet';
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login"
import { Register } from "./components/Register/Register"
import { Catalog } from "./components/Catalog/Catalog"
import { PetDetails } from './components/PetDetails/PetDetails';
import { Logout } from './components/Logout/Logout';
import { EditPet } from './components/EditPet/EditPet';

function App() {
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);
    const [auth, setAuth] = useState({});
    const petService = petServiceFactory(auth.accessToken);
    const authService = authServiceFactory(auth.accessToken);

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

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            setAuth(result);

            navigate('/catalog');
        } catch (error) {
            console.log('Problem');
        }

    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (confirmPassword !== registerData.password) {
            return;
        };

        try {
            const result = await authService.register(registerData);
            setAuth(result);

            navigate('/catalog');
        } catch (error) {
            console.log('Problem');
        }

    };

    const onLogout = async (data) => {
        await authService.logout();
        setAuth({});
    };

    const onPetEditSubmit = async (values) => {
        const result = await petService.edit(values._id, values);

        setPets(state => state.map(x => x._id === values._id ? result : x));

        navigate(`/catalog/${values._id}`);
    };


    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={context}>
            <div id="box">

                <Header />
                {/* <!-- Main Content --> */}
                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
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
        </AuthContext.Provider>
    );
}

export default App;
