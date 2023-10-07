import React, { useEffect, useState } from "react";
import NavBar from "../navbar/Nav";

import "./trending.css";
import Leftbar from "../leftsidebar/leftbar";
import Rightbar from "../rightsidebar/rightbar";
import PostHashtag from "../posthashtag/posthastag";
import Post from "../post/post";
import dummy from "../dummy/dummy";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import baseurl from "../../config";


function Trend(){

    const token =JSON.parse(localStorage.getItem("jwt"));
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [post,setPost]=useState([]);

    const validate=async()=>{
            await axios.get(`${baseurl}/api/user/self-info/`,{
                headers:{
                    Authorization:`token ${token}`
                }
               
            }).then((res)=>{
           
            setName(`${res.data.first_name} ${res.data.last_name}`)
            
        })      
        }
    

    const getPost=async()=>{
        
        await axios.get(`${baseurl}/api/post/trending-upvotes/`,
            { headers: { Authorization:`token ${token}` } }).then((res)=>{
               console.log(res);
                let data=res.data;
                setPost(data)
          
            }) }
            
            useEffect(
                ()=>{
                    getPost();
                    validate();
                },[])
           

    return(
     
        <div className="Home"> 
     
        <div className="home-nav">
        <NavBar name={name}/>
        </div>
         
       <div className="Home-grid">
       <div className="response1"><Leftbar /></div>
       
       <div className="Home-Container">
       
  
       {
        post.map((item)=>{
       return(
        <Post 
                id={item.tag.id}
                tag={item.tag.title}
                created={item.tag.created_by.first_name}
                post={item.content}
                postId={item.id}
                downvote={item.downvote_count}
                upvote={item.upvote_count}
        />
        ) 
       })}
       </div>
      
      <div className="response2"><Rightbar /></div>
        

       </div>
      
        </div>
    )
    }
export default Trend;
