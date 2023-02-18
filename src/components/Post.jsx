import userAvatar from "../assets/user.png" 

 export default function Post(prop) {
    return (
        <div className="post-container">
            <p className="post-body">{prop.body}</p>
            <div className="post-user">
                <img className="post-img" src={prop.profilePic || userAvatar} />
                <small>@{prop.username}</small>
            </div>
        </div>
    )
 }