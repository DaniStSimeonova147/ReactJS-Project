import { AuthProvider } from './contexts/AuthContext';
import { PetProvider } from './contexts/PetContext';


import { ToastProvider } from './contexts/ToastContext';
import { FetchInterceptor } from './components/FetchInterceptor/FetchInterceptor';
import { Layout } from './components/Layout/Layout';
import { CssBaseline } from '@mui/material';

function App() {

    return (
        <ToastProvider>
            <AuthProvider>
                <PetProvider>
                    <FetchInterceptor />
                    <CssBaseline />
                    <Layout />
                </PetProvider>
            </AuthProvider>
        </ToastProvider >
    );
}

export default App;
