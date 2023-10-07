import React,{useState,useEffect} from "react";
import TagInfo from "../taginfo/taginfo";
import NavBar from "../navbar/Nav";
import Post from "../post/post"
import dummy from "../dummy/dummy";
import { useParams } from "react-router-dom";
import axios from "axios";
import baseurl from "../../config";
import { useLayoutEffect } from "react";

import "./tag.css"; 


function Tag(){
    const token =JSON.parse(localStorage.getItem("jwt"));
    console.log(token);
    const params=useParams().params;
    const [post,setPost]=useState([]);
    const [arr,setArr]=useState({
        name:"",
        follower_count:"",
        created:""

    });
   
    
    
    const Tag=async()=>{
        
        axios.get(`${baseurl}/api/post/list/${params}`,{
            headers:{
                Authorization:`token ${token}`
            }
        }).then(res=>{
            console.log(res);
            setPost(res.data)
            const data=res.data[0];
            
            setArr({
                name:data.tag_info.title,
                followers:data.tag_info.follower_count,
                created:data.tag_info.created_by.first_name
            });
        })
    }
    useLayoutEffect(
        ()=>{
            Tag();
        },[]
    )

return(
<div>
    <NavBar/>
    <div className="tagcontentcontainer">
   {
    arr && <TagInfo name={arr.name} 
        followers={arr.follower_count}
        created={arr.created}
    />
   }
   
    <div className="tagpost">
    
    {post.map((item)=>{
       return(
       <div>
        <Post 
                id_post={item.id}
                id={item.tag.id}
                tag={item.tag.title}
                created={item.tag.created_by.first_name}
                post={item.content}
                downvote={item.downvote_count}
                upvote={item.upvote_count}
                comment={item.comments}
        />
        </div>
       
     
        ) 
       })}
    </div>
    </div>
</div>)

}
export default Tag;