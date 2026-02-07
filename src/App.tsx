import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Profile from "./pages/Profile.tsx";
import Login from "./pages/Login.tsx";
import Navbar from "./components/Navbar.tsx";
import AuthProvider from "./contexts/auth/AuthProvider.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";

function App() {
    return (
        <AuthProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                } />
                <Route path="/login" element={<Login />} />
            </Routes>
        </AuthProvider>
    )
}

export default App;