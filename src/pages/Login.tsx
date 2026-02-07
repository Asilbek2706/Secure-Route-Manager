import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth/useAuth";

const Login = () => {
    const [username, setUsername] = useState('');
    const [role, setRole] = useState<'user' | 'admin'>('user');
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectPath = location.state?.from?.pathname || '/';

    const handleLogin = () => {
        if (username.trim()) {
            auth.login(username, role);
            navigate(redirectPath, { replace: true });
        }
    }

    return (
        <div>
            <h2>Login Page</h2>
            <div>
                <label>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
            </div>
            <br />
            <div>
                <label>
                    Role:
                    <select value={role} onChange={e => setRole(e.target.value as 'user' | 'admin')}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
            </div>
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;