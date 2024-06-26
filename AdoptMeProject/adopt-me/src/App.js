import { AuthProvider } from './contexts/AuthContext';
import { PetProvider } from './contexts/PetContext';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Routing } from './routes/Routing';
import { ToastProvider } from './contexts/ToastContext';
import { FetchInterceptor } from './components/FetchInterceptor/FetchInterceptor';
import { Layout } from './components/Layout/Layout';
import { Box } from '@mui/material';
function App() {

    return (
        <ToastProvider>
            <AuthProvider>
                <PetProvider>
                    <FetchInterceptor />
                    <Layout />
                </PetProvider>
            </AuthProvider>
        </ToastProvider >
    );
}

export default App;
