import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Profile from "./pages/Profile.tsx";
import Login from "./pages/Login.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path={'/profile'} element={<Profile />} />
                <Route path={'/login'} element={<Login />} />
            </Routes>
        </>
    )
}

export default App
