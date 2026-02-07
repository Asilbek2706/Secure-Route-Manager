import { createContext } from "react";

export interface IAuthContext {
    user: any;
    login: (userData: any) => void;
    logout: () => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

