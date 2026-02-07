import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
    const { user } = useAuth()
    return (
        <h1>Xush kelibsiz, {user}! Bu sizning shaxsiy sahifangiz.</h1>
    )
}

export default Profile;