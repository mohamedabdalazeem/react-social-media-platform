import userAvatar from "../assets/user.png" 

 export default function Post(prop) {
    return (
        <div className="post-container">
        <p className="post-body">{prop.body}</p>
        <img className="post-img" src={prop.profilePic || userAvatar} />
        <small className="post-user">@{prop.username}</small>
        </div>
    )
 }