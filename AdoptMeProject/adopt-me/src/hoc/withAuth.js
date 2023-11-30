import { useAuthContext } from "../contexts/AuthContext";


export const withAuth = (Component) => {
    const EnhancedComponent = (props) => {
        const authContext = useAuthContext();
        return (
            <Component  {...props} auth={authContext} />
        );
    };

    return EnhancedComponent;
};