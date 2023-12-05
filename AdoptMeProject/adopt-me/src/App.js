import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { PetProvider } from './contexts/PetContext';

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
import { RouteGuard } from './components/common/RouteGuard';
import { PetOwner } from './components/common/PetOwner';

function App() {

    return (
        <AuthProvider>
            <PetProvider>
                <div id="box">
                    <Header />
                    {/* <!-- Main Content --> */}
                    <main id="main-content">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/catalog' element={<Catalog />} />
                            <Route path='/catalog/:petId' element={<PetDetails />} />

                            <Route element={<RouteGuard />}>
                                <Route path='/catalog/:petId/edit' element={
                                    <PetOwner>
                                        <EditPet />
                                    </PetOwner>} />
                                <Route path='/create-pet' element={<CreatePet />} />
                                <Route path='/logout' element={<Logout />} />
                            </Route>

                        </Routes>
                    </main>
                    <Footer />
                </div>
            </PetProvider>
        </AuthProvider>
    );
}

export default App;
