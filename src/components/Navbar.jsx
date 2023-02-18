import { Link } from "react-router-dom"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth";
import { async } from "@firebase/util";
import userAvatar from "../assets/user.png"
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const logOut = async() => {
        await signOut(auth)
        navigate('/login');
    };
    
    return (
        <div className="nav">
            
            <Link to="/" className="nav-home-link"> Home </Link>
                      
            { user && <div className="user-info">
                <Link to="/post" className="nav-link">Create post</Link> 

                <p>{user?.displayName}</p>

                <Link to="/profile" className="nav-link">Profile</Link>

                <img src={user?.photoURL || userAvatar} className="nav-img"/>

                <button onClick={logOut} className="log-out-btn">Log out</button>

                </div> || <div className="nav-links">

                <Link to="/login"> Login </Link>
                <Link to="/register"> Register </Link>
                </div>
            }
        </div>
    )
}