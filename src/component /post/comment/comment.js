import {React, useState} from "react"
import Profile from "./public/profile.png"
function Comment(){
 return(
    <div className="Post-Comment-Container">
    <div className="Post-Comment">
   <img src={Profile}/>
  
   <div className="Comment-Info">
       <p className="Comment-User">John Doe</p>
       <p>Lorem ipsum dolor sit amet, 
       consectetur adipiscing elit, sed do eiusmod tempor in
       cididunt ut labore et dolore magna aliqua. Ut enim ad minim veni
       am, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo co
       nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur.</p>
        
   </div>
   
   </div>
    </div>
)
}
export default Comment