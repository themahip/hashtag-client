import React, {useState} from "react";
import "./posthastag.css"
import Profile from "./public/profile.png"
import Smiley from "./public/smiley.png"
import Image from "./public/image.png"
function PostHashtag(){

    const [postInfo,setPostInfo]=useState({
        hashtag:"",
        post:""

    });

    function handleChange(event){
        const{value, name}=event.target;
        setPostInfo(prev=>
       {    return{
            ...prev,
            [name]:value
              
           }})
         }

    return(
    <div>
        <div className="Write-Post-Container">
        <img src={Profile}/>
        <p>John Doe</p>
        <p></p>
        <textarea type="text" onChange={handleChange} className="Wite-Post-Hashtag-Area" placeholder="Whats your hashtag ......"rows="3" name="hashtag" value={postInfo.hashtag} ></textarea>
        <p></p>
        <textarea type="text" className="Wite-Post-Text-Area" onChange={handleChange} name="post" placeholder="Whats your post ......." rows="3" value={postInfo.post}/>
        <p></p>
        <div className="Upload-Container">  <img className="Image-Post" src={Image}/>
        <p>Image</p>
        <button className="Post-Hashtag-button">Post</button>
        </div>
      
        </div>

    </div>)
}
export default PostHashtag;