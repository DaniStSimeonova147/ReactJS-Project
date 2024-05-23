import { AuthProvider } from './contexts/AuthContext';
import { PetProvider } from './contexts/PetContext';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Routing } from './routes/Routing';
import { ToastProvider } from './contexts/ToastContext';
import { FetchInterceptor } from './components/FetchInterceptor/FetchInterceptor';

function App() {

    return (
        <ToastProvider>
            <AuthProvider>
                <PetProvider>
                    <FetchInterceptor />
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
