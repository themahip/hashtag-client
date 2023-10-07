import React, { useEffect, useState } from "react";
import "./profilebar.css"
import ProfileTag from "../profiletag/profiletag";
import Post from "../../../post/post";
import dummy from "../../../dummy/dummy";
import axios from "axios";
import baseurl from "../../../../config";

function Profilebar(){
    const token =JSON.parse(localStorage.getItem("jwt"));
    const [barContent,setBarContent]=useState([]);

    const [clickYour, setClickYour]=useState({
        Post:true,
        Hashtag:false
    })
    const userTag=async()=>{
        axios.get(`${baseurl}/api/tag/self/`,
        { headers:{ Authorization:`token ${token}`}}).then(res=>{
           
            let data=res.data
            setBarContent(data);
        })
    }
    const [mypost, setMyPost]=useState([])
    const post=()=>{
        axios.get(`${baseurl}/api/post/self/`,{
            headers:{
                Authorization:`token ${token}`
            }
        }).then(res=>{
            setMyPost(res.data)
        })
    }


    useEffect(()=>{
        userTag();
        post();
    },[])
   

    function check(){
        if(clickYour.Post){
            return  (mypost.map((item)=>{
                return(
                 <Post 
                         tag={item.tag.title}
                         created={item.posted_by.first_name}
                         post={item.content}
                 />
                 ) 
                }))

        }
       
    
        else{ 
            return (
                barContent.map((item)=>{
                    return (<ProfileTag name={item.title} followers={item.followers} post={item.post_count}/>)
                  }) 
            )
          
        }
    }
   
    
    function appearpost(){
     
        setClickYour(()=>{

                return({
                    Post:true,
                    Hashtag:false
                 })} 
                )
    }
    function appeartag(){
        setClickYour(()=>{
            return({
                post:false,
                Hashtag:true
            })
        })
    }
    
    return(
        <div>
        <div className="profilebar">
            <ul>
            <li onClick={appearpost} style={{
          
          color: clickYour.Post? '#3377FA' : '',
          textDecoration:clickYour.Post? 'underline' : '',

        }} >Your Post</li>
            <li onClick={appeartag} style={{
          
          color: clickYour.Hashtag? '#3377FA' : '',
          textDecoration:clickYour.Hashtag? 'underline' : '',

        }}
             >Your Hashtag</li>
            </ul>
         
        </div>
  {
    check()

  }

        </div>
    )
}
export default Profilebar;