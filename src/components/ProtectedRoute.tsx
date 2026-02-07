import { useAuth } from "../contexts/auth/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

interface IProps {
    children: ReactNode;
    isAllowed?: ("admin" | "user")[];
}

const ProtectedRoute = ({ children, isAllowed }: IProps) => {
    const { user, role } = useAuth();
    const location = useLocation();

    if (!user) {
        return <Navigate to={"/login"} state={{ from: location }} replace={true} />;
    }

    if (isAllowed && !isAllowed.includes(role!)) {
        return (
            <div>
                <h2>Kirish taqiqlangan!</h2>
                <p>Sizda ushbu sahifaga kirish huquqi yoq.</p>
            </div>
        );
    }

    return <>{children}</>;
};

export default ProtectedRoute;