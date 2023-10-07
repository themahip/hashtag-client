import {React,useState,useEffect} from "react";
import "./taginfo.css"
import logo from "./public/logo.png"
import follopic from "./public/Group 21.png";
import Posthastag from "../posthashtag/posthastag";
import axios from "axios";
import { useParams } from "react-router-dom";
import baseurl from "../../config";
import Feed from "../postfeed/postfeed";

function TagInfo(props){

  const token =JSON.parse(localStorage.getItem("jwt"));
  const params=useParams().params;
  const [user,setUser]=useState("");

    const[clickFollowing,setClickFollowing]=useState(false);

    const following=()=>{
      axios.get(`${baseurl}/api/tag/usertagfolowingsignal/${params}`,{
        headers:{
          Authorization:`token ${token}`
        }
      }).then(res=>{
        console.log(res.data);
        if(res.data.following===true){
            setClickFollowing(true)
        }
        else{
          setClickFollowing(false)
        }
      })
    }
    const [tag,setTag]=useState({
      title:"",
      followers:"",
      created_by:""
    });

    const [check,setCheck]=useState([]);

  const tagin=()=>{
    axios.get(`${baseurl}/api/tag/detail/${params}/`,{
      headers:{
        Authorization:`token ${token}`
      }
    }).then(res=>{
      setTag({
        title:res.data.title,
        followers:res.data.follower_count,
        created_by:res.data.created_by
      })
      
    })
    
  }
    const follow=()=>{
      axios.post(`${baseurl}/api/tag/followtag/${params}/`,{

      },
      {
          headers:{
              Authorization:`token ${token}`
          }
      }
      ).then(res=>{
      
        console.log(res);
      })
  }

  const validate=async()=>{
    axios.get(`${baseurl}/api/user/self-info/`,{
       headers:{
           Authorization:`token ${token}`
       }
   }).then((res)=>{
  setUser(res.data.username); 
})      
}

useEffect(()=>{
  validate();
  tagin();
  following();
},[])

  
    return(
    <div>
    <div className="hastagpicture"></div>
    <div className="taginfocontainer">
    <div className="tagnamecontainer">
    <img src={logo}/>
    <div className="tagname">
           <h2>{tag.title}</h2>
            <p>{tag.follower_count} followers</p>
            <p>created by {tag.created_by.first_name}</p>
    
    
    </div>
    </div>
    <button onClick={(event)=>{
        
        follow();
        }
        
    } name="followbtn">{<img src={follopic}/>} {
      clickFollowing?"following":"follow"
    }</button>
    </div>
    <div className="tagposthashtag "> {clickFollowing?<Feed/>:console.log("hello")}</div>
   

    </div>)
}
export default TagInfo;