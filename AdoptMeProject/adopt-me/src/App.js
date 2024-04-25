import { AuthProvider } from './contexts/AuthContext';
import { PetProvider } from './contexts/PetContext';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Routing } from './routes/Routing';

function App() {

    return (
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
    );
}

export default App;
