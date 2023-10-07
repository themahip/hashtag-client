import React, {useState} from "react";
import "./posthastag.css"
import Profile from "./public/profile.png"
import Smiley from "./public/smiley.png"
import Image from "./public/image.png"
import axios from "axios";
import baseurl from "../../config";
function PostHashtag(props){
    const token =JSON.parse(localStorage.getItem("jwt"));
    const [postInfo,setPostInfo]=useState({
        hashtag:"",
        post:""

    });
    function posthashtag(){
       console.log(postInfo.hashtag);
        axios.post(`${baseurl}/api/tag/`,{
            title:postInfo.hashtag,
            content:postInfo.post
        },{
            headers:{
                Authorization:`token ${token}`}
        }
       
        ).then(res=>{
                console.log(res);
            })
    }

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
        <div className="post-container-uppper">
        <img src={Profile}/>
        <p>{props.name}</p>
        </div>
        
        <div className="post-container-left">
       
<div className="selecthashtag"><button>Create Hashtag</button></div>
<textarea type="text" onChange={handleChange} className="Wite-Post-Hashtag-Area" placeholder="Name your hashtag ......"rows="3" name="hashtag" value={postInfo.hashtag} ></textarea>
<p></p>
<textarea type="text" className="Wite-Post-Text-Area" onChange={handleChange} name="post" placeholder="about your hashtag ......." rows="3" value={postInfo.post}/>
<p></p>

<div className="Upload-Container"> 
<button onClick={posthashtag}>Create</button>
</div>
        </div>

       
      
        </div>

    </div>)
}
export default PostHashtag;