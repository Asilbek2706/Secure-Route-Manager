import { useState, useEffect, type ReactNode } from "react";
import  {AuthContext}  from "./AuthContext";

interface IProps {
    children: ReactNode;
}

const AuthProvider = ({ children }: IProps) => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

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

export default AuthProvider;