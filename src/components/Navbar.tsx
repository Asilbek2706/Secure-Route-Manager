import { NavLink } from "react-router-dom";
import type { CSSProperties } from "react";
import { useAuth } from "../contexts/auth/useAuth";

const Navbar = () => {
    const navbarLinkStyles = ({ isActive }: { isActive: boolean }): CSSProperties => ({
        fontWeight: isActive ? "bold" : "normal",
        textDecoration: isActive ? "none" : "underline",
        marginRight: "10px"
    });

    const { user, role, logout } = useAuth();

    return (
        <nav className="navbar">
            <NavLink style={navbarLinkStyles} to='/'>Home</NavLink>

            {user && (
                <NavLink style={navbarLinkStyles} to='/profile'>
                    Profile ({role})
                </NavLink>
            )}

            {role === 'admin' && (
                <NavLink style={navbarLinkStyles} to='/admin'>
                    Admin Panel
                </NavLink>
            )}

            {!user ? (
                <NavLink style={navbarLinkStyles} to='/login'>Login</NavLink>
            ) : (
                <button onClick={logout}>
                    Logout ({user})
                </button>
            )}
        </nav>
    );
};

export default Navbar;