import React from "react";
import "./profiletag.css";
import logo from "./public/logo.png";
import { useState } from "react";
import axios from "axios";
import baseurl from "../../../../config";
import { useEffect } from "react";

function ProfileTag(props){

    const token =JSON.parse(localStorage.getItem("jwt"));
   
    
    return(
        <div className="profiletag">
        <div className="tagheading">
            <img src={logo} />
            <p>{props.name}</p>
            <div className="dots">
            <p >...</p>
            </div>
            
            
        </div>
        <div className="tagsubheading">
            <p> Followers: <span></span></p>
            <p> Post:<span>{props.post}</span></p>
        </div>
        </div>
    )
}
export default ProfileTag;
