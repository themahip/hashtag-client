import React from "react";
import "./leftbar.css";
import Profile from "./public/profile.png"
import Setting from "./public/setting.png"
import {LeftSidebarcontent} from "../sidebarcontent/sidebarcontent";
import axios from "axios";
import baseurl from "../../config";
import { useEffect, useState } from "react";
function Leftbar(props){
    const data=props
    const token =JSON.parse(localStorage.getItem("jwt"));
    const [name,setName]=useState("");
    const validate=async()=>{
        axios.get(`${baseurl}/api/user/self-info/`,{
           headers:{
               Authorization:`token ${token}`
           }
          
       }).then((res)=>{
      
       setName(`${res.data.first_name} ${res.data.last_name}`)
       
   })      
   }

   useEffect(()=>{
    validate();
   })
    return(
        <div>
            <div className="Leftbar">
                <div className="Left-bar_Upper-Part">
                <img className="Left-Bar-Profile" src={Profile}/>
                <h3 className="Left-Bar-Name">{name}</h3>
                <img className="Left-Bar-Setting" src={Setting}/>
                <p></p>
                <p className="Left-Bar-Location">Kathmandu, Nepal</p>
                </div>
                <LeftSidebarcontent barcontent={data}/>
              
              
                
            </div>
         
        </div>
    )
}
export default Leftbar;