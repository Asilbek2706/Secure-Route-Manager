import { useState, useEffect, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";

interface IProps {
    children: ReactNode;
}

const AuthProvider = ({ children }: IProps) => {
    const [user, setUser] = useState<any>(null);
    const [role, setRole] = useState<"admin" | "user" | null>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        const savedRole = localStorage.getItem("role") as "admin" | "user";
        if (savedUser && savedRole) {
            setUser(JSON.parse(savedUser));
            setRole(savedRole);
        }
    }, []);

    const login = (userData: any, userRole: "admin" | "user") => {
        setUser(userData);
        setRole(userRole);
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("role", userRole);
    };

    const logout = () => {
        setUser(null);
        setRole(null);
        localStorage.removeItem("user");
        localStorage.removeItem("role");
    };

    return (
        <AuthContext.Provider value={{ user, role, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;