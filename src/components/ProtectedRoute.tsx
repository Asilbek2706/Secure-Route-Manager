import {useAuth} from "../contexts/AuthContext.tsx";
import {Navigate, useLocation} from "react-router-dom";
import type {ReactNode} from "react";

interface IProps {
    children: ReactNode;
}

const ProtectedRoute = ({children}: IProps) => {
    const { user} = useAuth()
    const location = useLocation();

    if (!user) {
        return <Navigate to={"/login"}  state={{ from: location }} replace={true} />
    }

    return <>{children}</>
}

export default ProtectedRoute;