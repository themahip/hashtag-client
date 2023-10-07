import React, { useState } from "react";
import './postfeed.css'
import axios from "axios";
import baseurl from "../../config";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Feed(){
const [writePost, setWritePost]=useState("");
const token =JSON.parse(localStorage.getItem("jwt"));
const params=useParams().params; 
const post=()=>{
    console.log(writePost);
    axios.post(`${baseurl}/api/post/${params}/`,{
        content:writePost
    },{
        headers:{
            Authorization:`token ${token}`
        }
    }).then(res=>{
       console.log(res);
    })
}

return(

    <div className="create-post">
    <h2>Create Post</h2>
    <div className="work">
    <textarea placeholder="write your post on this hashtag" onChange={(event)=>{
        setWritePost(event.target.value)
    }}></textarea>
    <Link to={'/'+params}><button onClick={post }>submit</button></Link>
    </div>
  
    </div>
)
}
export default Feed;
