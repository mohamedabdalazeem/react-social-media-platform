import { auth, storage } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import userAvatar from "../assets/user.png"
import { Button, Input, message, Upload  } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { useState } from "react";


export default function Profile() {

    const [profileImg, setProfileImg] = useState(null);
    const [profileName, setProfileName] = useState("");
    const [user] = useAuthState(auth);
    

    const changeImg = async () => {
        if(profileImg){
            const imageRef = ref (storage, `images/${Math.floor(Math.random()*10000) + profileImg.name } `);
            try{
                await uploadBytes(imageRef, profileImg);
                message.success("profile image uploaded");
                const imgUrl = await getDownloadURL(imageRef);
                replaceProfileImg(imgUrl);
                window.location.reload(true);
            } catch (error){
                message.error(error.message);
            }
        } else{
            message.info("select image to upload ");
        }
    }

    const replaceProfileImg = async (url) => {
        try {
            await updateProfile(auth.currentUser, { photoURL:url });
            message.success("profile picture updated successfully");
            window.location.reload(true);
        } catch (error){
            message.error(error.message);
        }
    }

    const changeName = async () => {
        if(profileName.length >2){
        try {
            await updateProfile(auth.currentUser, { displayName:profileName, gen:"male"});
            message.success("your username was updated successfully");
            window.location.reload(false);
            
        } catch (error){
            message.error(error.message);
        }
        } else{
            message.info("minimum 3 characters for username");
            
        }
        
    }
    return(
        <div className="profile-container">     
            <div className="profile">
            <p>Your info:</p>
                <div>
                    <p>username: {user?.displayName}</p>
                    <Input maxLength={50} 
                        onChange={(event) => {setProfileName(event.target.value);}}
                        placeholder="type new username">
                    </Input>
                    <Button onClick={changeName} style={{margin:"5px"}}>Change</Button>
                </div>

                <p>your profile pic:</p>
                <img src={user?.photoURL || userAvatar} className="profile-img"/>
                {!user?.photoURL && <p>you haven't set your profile pic yet</p> }
                <div>
                    <div>
                        <Upload type="file" listType="picture" accept=".png, .jpg, .jpeg, .webp" multiple={false}
                            onChange={(info) => setProfileImg(info.file.originFileObj)}>
                            <Button 
                                icon={<UploadOutlined />}>
                                Select Image
                            </Button>
                        </Upload>
                        <Button onClick={changeImg} style={{margin:"5px"}}>Upload image</Button>
                    </div>
                </div>
                
                <p>your mail address: {user?.email}</p>
            </div>
        </div>
    )
}