import React from "react";
import "./leftbar.css";
import Profile from "./public/profile.png"
import Setting from "./public/setting.png"
import {LeftSidebarcontent} from "../sidebarcontent/sidebarcontent";
function Leftbar(){
    return(
        <div>
            <div className="Leftbar">
                <div className="Left-bar_Upper-Part">
                <img className="Left-Bar-Profile" src={Profile}/>
                <h3 className="Left-Bar-Name">John Doe</h3>
                <img className="Left-Bar-Setting" src={Setting}/>
                <p></p>
                <p className="Left-Bar-Location">Kathmandu, Nepal</p>
                </div>
                <LeftSidebarcontent/>
              
              
                
            </div>
         
        </div>
    )
}
export default Leftbar;