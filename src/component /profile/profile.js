import React from "react";
import Leftbar from "../leftsidebar/leftbar";
import PostHashtag from "../posthashtag/posthastag";
import RightBar from "../rightsidebar/rightbar"
import NavBar from "../navbar/Nav";
import "./profile.css"
import Profilebar from "./hooks/profilebar/profilebar.js";

function Profile(){
return(
    <div className="Profilepage">
        <NavBar/>
        <div className="Profileflex">
        <div><Leftbar/></div>
         <div className="profilemiddle">
         <PostHashtag/>
         <Profilebar/>
   
         </div>
         
         <div >
         <RightBar/>
         </div>
        
         </div>
        
    </div>
   
)
} 
export default Profile;