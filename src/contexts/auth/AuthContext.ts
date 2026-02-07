import { createContext } from "react";

export interface IAuthContext {
    user: any;
    role: "admin" | "user" | null;
    login: (userData: any, userRole: "admin" | "user") => void;
    logout: () => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

