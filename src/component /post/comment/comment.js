import {React, useState} from "react"
import Profile from "./public/profile.png"
function Comment(props){
    console.log(props);
 return(
    <div className="Post-Comment-Container">
    <div className="Post-Comment">
   <img src={Profile}/>
   { props.content.map(item=>{
    <div className="Comment-Info">
       <p className="Comment-User">item.commented_by.first_name</p>
       <p>item.comment</p>
        
   </div>
   })}
  
   
   </div>
    </div>
)
}
export default Comment