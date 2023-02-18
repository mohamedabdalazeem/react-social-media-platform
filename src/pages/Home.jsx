import { getDocs, collection } from "firebase/firestore"
import { useEffect, useState } from "react";
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link, useNavigate } from "react-router-dom";
import Post from "../components/Post";
import { db } from "../config/firebase";
import { message } from "antd";

export default function Home() {

    const [user] = useAuthState(auth);
    const postsRef = collection(db, "posts");
    const [postList, setPostList] = useState([]);
    const navigate = useNavigate();

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostList(data.docs.map((doc)=> (
            {...doc.data(),
                id:doc.id
            }
        )))
    };

    useEffect(()=>{
        getPosts();
    },[])

    useEffect(()=>{
        if(!user){
            navigate('/login');
            message.info("Please login to access the Homepage");
        }
    },[])
    
    return (
        <div>
            <h3>Latest posts</h3>
            { !user && <p>Please <Link to="/login">login</Link> to see the posts</p>}
            { user &&
            <div>
                {
                    postList.map(post => (
                        <Post 
                            key={post.id}
                            body={post.body}
                            username={post.username}
                            profilePic={post.profilePic}
                        />
                    ))
                }
            </div>
            }
        </div>
    )
}