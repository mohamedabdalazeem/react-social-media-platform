import { auth, provider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup ,updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button, Divider, Form, Input, message, Typography } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { async } from "@firebase/util";
import { useState } from "react";



export default function Register() {

    const [registerName, setRegisterName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            message.success("sign up successful");
            addName();
            navigate('/');
        } catch (error) {
            message.error(error.message);
        }
    };

    const addName = async () => {
        try {
            await updateProfile(auth.currentUser, { displayName:registerName });
            
        } catch (error){
            message.error("something went wrong");
        }
        
        
    }
    const navigate = useNavigate();
    const signInWithGoogle = async() => {
        try{
            await signInWithPopup(auth, provider);
            message.success("Login successful")
            navigate('/');
        } catch(error) {
            message.error(error.message)
        }
        
    }
    
    return (
        <div className="login-container">
            <Form className="login-form" onFinish={register}>
                <Typography.Title>Register</Typography.Title>
                <Form.Item 
                    rules={[
                        {
                            required: true,
                            message: "please enter your name"
                        }
                    ]}
                    label={<label style={{ fontSize: "16px" }}>Full Name</label>} name={"fullName"}>
                    <Input 
                        placeholder="Enter your full name" 
                        style={{fontSize:"16px"}} 
                        onChange={(event) => {setRegisterName(event.target.value);}}/>
                </Form.Item>

                <Form.Item 
                    rules={[
                    {  
                        required: true,
                        type: "email",
                        message: "please enter a valid email"
                    }
                    ]}
                    label={<label style={{ fontSize: "16px", marginRight:"30px" }}>Email</label>} name={"email"}>
                    <Input 
                        placeholder="Enter your Email" 
                        style={{fontSize:"16px"}} 
                        onChange={(event) => {setRegisterEmail(event.target.value);}}/>
                </Form.Item>

                <Form.Item 
                    rules={[
                        {  
                            required: true,
                            message: "please enter your password"
                        }
                        ]}
                    label={<label style={{ fontSize: "16px" }}>Password</label>} name={"password"}>
                    <Input.Password 
                        placeholder="Enter your Password" 
                        style={{fontSize:"16px"}} 
                        onChange={(event) => {setRegisterPassword(event.target.value);}}/>
                </Form.Item>

                <Button type="primary" htmlType="submit" block>Sign up</Button>
                <Divider style={{borderColor:"black"}}>or sign in with</Divider>
                <GoogleOutlined style={{ fontSize: '30px', color: '#de5246 ' }} onClick={signInWithGoogle}/>
                <br></br>
                <br></br>
                <Link to="/login">Already have an account | Login here</Link>
                 
            </Form>
        </div>
    )
}