import { createContext, type ReactNode, useContext, useState } from "react";

interface IAuthContext {
    user: any;
    login: (userData: any) => void;
    logout: () => void;
}

interface IProps {
    children: ReactNode;
}

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider = ({ children }: IProps) => {
    const [user, setUser] = useState<any>(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = (userData: any) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth hooki AuthProvider ichida ishlatilishi shart!");
    }

    return context;
};

export default AuthProvider;