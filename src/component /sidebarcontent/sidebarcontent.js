import React, { useEffect } from "react";
import "./side.css";
import axios from "axios";
import baseurl from "../../config";
import { useState } from "react";
import { Link } from "react-router-dom";


function LeftSidebarcontent(){

    const token =JSON.parse(localStorage.getItem("jwt"));
    const [barContent,setBarContent]=useState([]);

   
    
    const userTag=async()=>{
        axios.get(`${baseurl}/api/tag/self/`,
        { headers:{ Authorization:`token ${token}`}}).then(res=>{
           
            let data=res.data
            setBarContent(data);
            console.log(data);
        })
    }
   
    useEffect(()=>{
        userTag();
    },[])
    
    return <div className="contentsss">
    
        <h2>Your Hashtag</h2>
        {
            barContent.map((item)=>{

               return (<Link to={'/'+item.id}><p># {item.title}</p> </Link>)})
        }
        <p className="view">View All</p>
    </div> 
}



function RightSidebarcontent(){
    const [trend,setTrend]=useState([]);
    const token =JSON.parse(localStorage.getItem("jwt"));
    const [sug, setSug]=useState([]);
    const suggest=async()=>{
    
        axios.get(`${baseurl}/api/tag/suggested/`,
        {
            headers:{
                Authorization:`token ${token}`
            }
        }).then(res=>{
            setSug(res.data)
        })
    }
    const trending=()=>{
        axios.get(`${baseurl}/api/tag/trending/`,{
            headers:{
                Authorization:`token ${token}`
            }
        }).then(res=>{

                setTrend(res.data)
        })
    }
   
    useEffect(()=>{
        suggest();
        trending();
    },[])
    return(
        <div className="contentsss">
 
        <h3>Suggested HashTags</h3>
       {
            sug.map((item)=>{
                return(<Link to={'/'+item.id}>
                    <p># {item.title}</p>
                </Link> )
                
            })
       }

       <h3>Trending Hashtag</h3>
       {
        trend.map(item=>{
            return(
                <Link to={'/'+item.id}><p># {item.title}</p></Link>
            )
        })
       }
       
    </div>
    )
}
export {LeftSidebarcontent,RightSidebarcontent};