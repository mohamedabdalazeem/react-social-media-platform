import { getDocs, collection } from "firebase/firestore"
import { useEffect, useState } from "react";
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link } from "react-router-dom";
import Post from "../components/Post";
import { db } from "../config/firebase"
export default function Home() {

    const [user] = useAuthState(auth);
    const postsRef = collection(db, "posts");
    const [postList, setPostList] = useState([]);

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