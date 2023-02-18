import { Form, Button, Typography,Input, message} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {

    
    const [post, setPost] = useState("");
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const postsRef = collection(db, "posts");
    
    const sendPost = async () => {
        try{
        await addDoc(postsRef, {
            body:post,
            userId:user?.uid,
            username: user.displayName,
            profilePic: user.photoURL,

        });
        message.success("Post submitted successfully")
            navigate('/');
        } catch (error) {
            message.error(error.message)
        }
    };
    
    return (
        
        <div className="create-post-container">
            
            <Form className="post-form" onFinish={sendPost}>
            <Typography.Title>Create a post ✍️ </Typography.Title>

                <TextArea 
                placeholder="write your thoughts" 
                style={{fontSize:"20px"}} 
                rows={4} required={true}
                maxLength={4000}
                onChange={(event) => {setPost(event.target.value);}}/>
                <small>max Length: 4000 characters</small>
                <br></br>
                <br></br>

                <Button 
                    type="primary" htmlType="submit" 
                    className="post-btn" size="large">Post
                </Button>

            </Form>
        </div>
        
    )
}