import {React,useEffect,useState} from "react";
import "./post.css"
import Logo from "./public/logo.png"
import Upvote from "./public/upvote.png"
import {Link} from "react-router-dom";
import Downvote from "./public/downvote.png"
import CommentImg from "./public/comment.png"
import Profile from "./public/profile.png"
import Comment from "./comment/comment";
import likeupvote from "./public/likeupvote.png";
import likedownvote from "./public/likedownvote.png";
import baseurl from "../../config";
import Tag from "../tag/tag";
import axios from "axios";



function Post(props){
    const token =JSON.parse(localStorage.getItem("jwt"));
    const [showComment, setShowComment]=useState(false);
    const [like,setLike]=useState(Upvote);
    const [disLike,setDisLike]=useState(Downvote);
    const [likeClick,setLikeClick]=useState(false);
    const [disLikeClick,setDisLikeClick]=useState(false);
    const [count, setCount]=useState({
        upvote:"",
        downvote:""
    })
    
    const likeFunc=()=>{
        axios.post(`${baseurl}/api/post/upvote/${props.id_post}`,{

        },{
            headers:{
                Authorization:`token ${token}`
            }
        }).then(res=>{
            console.log(res);
        })
    }
    const dislikefunc=()=>{
        axios.post(`${baseurl}/api/post/downvote/${props.id_post}`,{
        },{
            headers:{
                Authorization:`token ${token}`
            }
        }).then(res=>{
            console.log(res);
        })
    }
   

    return( 
        <div className="Post-Container-Home">
            <div className="Post-Hashtag">
            <img src={Logo}/>
      
        <div>
       
           <Link to={'/'+props.id}> <p >{props.tag}</p></Link>
           <p className="Small">{props.created}</p>
           
            </div>
           
        </div>
        <p className="Written-Post">{props.post}</p>
         <hr className="Post-Line"/>
         <div className="React-Home">
            <img onClick={()=>{
                likeFunc();
                setDisLike(Downvote)
                setLikeClick(!likeClick)
                setDisLikeClick(false)
                likeClick?setLike(likeupvote):setLike(Upvote)
                
            }} src={like}/>
            <p>{props.upvote}</p>
            <img onClick={()=>{
                dislikefunc();
                setLike(Upvote);
                setLikeClick(false);
                setDisLikeClick(!disLikeClick);
                disLikeClick?setDisLike(likedownvote):setDisLike(Downvote); 
            }} src={disLike} />
            <p>{props.downvote}</p>
            <div className="Post-Comment-Button">
             <img onClick={()=>setShowComment(!showComment)}src={CommentImg}/>

            </div>
            
         </div>
         <hr className="Post-Line"/>
       {
        showComment?<Comment id={props.id_post} content={props.comment}/>:null
       }
       <div className="Comment-Box">
        <input placeholder="Comment Your Thought ......" />
        <button>Post</button>
       </div>
        </div>
    )
}
export default Post;

