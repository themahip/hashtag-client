import React from "react";
import "./post.css"
import Logo from "./public/logo.png"
import Upvote from "./public/upvote.png"
import Downvote from "./public/downvote.png"
import Comment from "./public/comment.png"
function Post(){
    return(
        <div className="Post-Container-Home">
            <div className="Post-Hashtag">
            <img src={Logo}/>
      
        <div>
            <p>Summer_Food</p>
            <p className="Small">Peter Anderson</p>
           
            </div>
        </div>
        <p className="Written-Post">Lorem ipsum dolor sit amet
        , consectetur adipiscing elit, sed do eiusmod t
        empor incididunt ut labore et dolore magna aliqua. Ut
         enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
         irure dolor in reprehenderit in voluptate velit esse cillum dolore e
         u fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit an
         im id est laborum.</p>
         <div className="React-Home">
            <img src={Upvote}/>
            <p>12.5k</p>
            <img src={Downvote} />
            <p>12.5k</p>
            <img  src={Comment}/>
         </div>
        </div>
    )
}
export default Post;

