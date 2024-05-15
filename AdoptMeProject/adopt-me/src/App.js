import { AuthProvider } from './contexts/AuthContext';
import { PetProvider } from './contexts/PetContext';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Routing } from './routes/Routing';
import { ToastContainer } from 'react-toastify';
import { ToastProvider } from './components/Toast/ToastProvider';

function App() {

    return (
        <ToastProvider>
        <AuthProvider>
            <PetProvider>
            
                <div id="box">
                    <Header />
                    {/* <!-- Main Content --> */}
                    <main id="main-content">
                        <Routing />
                    </main>
                    <Footer />
                </div>
            </PetProvider>
        </AuthProvider>
        </ToastProvider>
    );
}

export default App;
