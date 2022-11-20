import {React,useState} from "react";
import "./post.css"
import Logo from "./public/logo.png"
import Upvote from "./public/upvote.png"
import Downvote from "./public/downvote.png"
import CommentImg from "./public/comment.png"
import Profile from "./public/profile.png"
import Comment from "./comment/comment";
import likeupvote from "./public/likeupvote.png";
import likedownvote from "./public/likedownvote.png"



function Post(props){
    const [showComment, setShowComment]=useState(false);

    const [like,setLike]=useState(Upvote);
    const [disLike,setDisLike]=useState(Downvote);
    const [likeClick,setLikeClick]=useState(false);
    const [disLikeClick,setDisLikeClick]=useState(false);

  
    
    return( 
        <div className="Post-Container-Home">
            <div className="Post-Hashtag">
            <img src={Logo}/>
      
        <div>
            <p>{props.tag}</p>
            <p className="Small">{props.created}</p>
           
            </div>
           
        </div>
        <p className="Written-Post">{props.post}</p>
         <hr className="Post-Line"/>
         <div className="React-Home">
            <img onClick={()=>{
                setDisLike(Downvote)
                setLikeClick(!likeClick)
                setDisLikeClick(false)
                likeClick?setLike(likeupvote):setLike(Upvote)
            }} src={like}/>
            <p>12.5k</p>
            <img onClick={()=>{
                setLike(Upvote);
                setLikeClick(false);
                setDisLikeClick(!disLikeClick);
                disLikeClick?setDisLike(likedownvote):setDisLike(Downvote); 
            }} src={disLike} />
            <p>12.5k</p>
            <div className="Post-Comment-Button">
             <img onClick={()=>setShowComment(!showComment)}src={CommentImg}/>

            </div>
            
         </div>
         <hr className="Post-Line"/>
       {
        showComment?<Comment/>:console.log(true)
       }
       <div className="Comment-Box">
        <input placeholder="Comment Your Thought ......" />
        <button>Post</button>
       </div>
        </div>
    )
}
export default Post;

