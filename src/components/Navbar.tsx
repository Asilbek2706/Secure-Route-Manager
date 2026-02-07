import { NavLink } from "react-router-dom";
import type { CSSProperties } from "react";
import { useAuth } from "../contexts/AuthContext.tsx";

const Navbar = () => {
    const navbarLinkStyles = ({ isActive }: { isActive: boolean }): CSSProperties => ({
        fontWeight: isActive ? "bold" : "normal",
        textDecoration: isActive ? "none" : "underline",
        marginRight: "10px"
    });

    const { user, logout } = useAuth();

    return (
        <nav className="navbar">
            <NavLink style={navbarLinkStyles} to='/'>Home</NavLink>
            {user && <NavLink style={navbarLinkStyles} to='/profile'>Profile</NavLink>}
            {!user ? (
                <NavLink style={navbarLinkStyles} to='/login'>Login</NavLink>
            ) : (
                <button
                    onClick={logout}>Logout ({user})
                </button>
            )}
        </nav>
    );
};

export default Navbar;