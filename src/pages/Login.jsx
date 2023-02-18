import {auth, provider} from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { Button, Divider, Form, Input, message, Typography } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { useState } from "react";


export default function Login() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const navigate = useNavigate();

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            message.success("sign in successful");
            navigate('/');
        } catch (error) { 
            message.error(error.message);
        }
    }

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
           
            <Form className="login-form" onFinish={login}>
                <Typography.Title>Login</Typography.Title>
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
                    onChange={(event) => {setLoginEmail(event.target.value);}}/>
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
                    onChange={(event) => {setLoginPassword(event.target.value);}}/>
                </Form.Item>
                
                <Button type="primary" htmlType="submit" block style={{textDecoration:"underline"}}>Login</Button>
                <Divider style={{borderColor:"black"}}>or sign in with</Divider>
                <GoogleOutlined style={{ fontSize: '30px', color: '#de5246 ' }} onClick={signInWithGoogle}/>
                <br></br>
                <br></br>
                <Link to="/register">Don't have an account Register here</Link>
                
                
            </Form>
        </div>
    )
}