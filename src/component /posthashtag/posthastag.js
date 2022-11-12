import React from "react";
import "./posthastag.css"
import Profile from "./public/profile.png"
import Smiley from "./public/smiley.png"
import Image from "./public/image.png"
function PostHashtag(){
    return(<div>
        <div className="Write-Post-Container">
        <img src={Profile}/>
        <p>John Doe</p>
        <p></p>
        <textarea type="text" className="Wite-Post-Hashtag-Area" placeholder="Whats your hashtag ......"rows="3" ></textarea>
        <p></p>
        <textarea type="text" className="Wite-Post-Text-Area" placeholder="Whats your post ......." rows="3"/>
        <p></p>
        <div className="Upload-Container">  <img className="Image-Post" src={Image}/>
        <p>Image</p>
        <button className="Post-Hashtag-button">Post</button>
        </div>
      
        </div>

    </div>)
}
export default PostHashtag;