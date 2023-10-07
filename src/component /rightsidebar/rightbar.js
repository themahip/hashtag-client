import React from "react";
import "./rightbar.css";
import {RightSidebarcontent} from "../sidebarcontent/sidebarcontent";

function Rightbar(props){
    return(<div>
        <div className="Rightbar">
           <RightSidebarcontent />
        </div>
    </div>)
}
export default Rightbar;