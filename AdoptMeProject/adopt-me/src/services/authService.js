import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

export const authServiceFactory = () => {

    const login = async (data) => {
        const { email, password } = data;
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    };

    const register = async (data) => {
        const { email, password } = data;
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    };

    const logout = async () => {
        await signOut(auth);
    };

    return {
        login,
        register,
        logout,
    };
};