import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth hooki AuthProvider ichida ishlatilishi shart!");
    }
    return context;
};
