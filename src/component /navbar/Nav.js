import React,{useEffect, useState}  from "react";
import "./nav.css";
import {Link} from "react-router-dom"
import Logo from "./public/logo.png";
import Home from "./public/home.png";
import Notification from "./public/notification.png";
import Profile from "./public/profile.png";
import Trending from "./public/trending.png";
import axios from "axios";
import baseurl from "../../config";


function NavBar(){
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

    const [NavBarColor,setNavBarColor]=useState({
        home:true,
        trending:false,
        profile:false
    })
   
    return(
    <div className="home-nav">
        <div className="Nav-bar">
        <div className="Nav-container">
        <img  className="Nav-pic"  src={Logo}/>
        <input className="searchbar" placeholder="Search Hashtag ......"></input>
        <Link to="/">
        <img className="Nav-pic" src={Home}/>
        </Link>
        <Link to={"/trending"}>
        <img className="Nav-pic" 
        onClick={()=>{
            setNavBarColor((prev)=>{
                return({
                    profile:false,
                    trending:true,
                    home:false
                } )
            })
        }}  
        style={{
                backgroundColor: NavBarColor.trending?"#3377FA":""
                }
        }
        src={Trending}/>
        </Link>
        
        <img className="Nav-pic" src={Notification}/>
        <Link to="/Profile">
        <img className="Nav-pic" onClick={()=>{
            setNavBarColor((prev)=>{
                return({
                    trending:false,
                    home:false,
                    profile:true
                    
                } )
            })
        }}  style={{
                backgroundColor: NavBarColor.profile?"#3377FA":""
                }} src={Profile}/>
      
       
        </Link>
        <Link to="/profile">
        <p  onClick={()=>{
            setNavBarColor((prev)=>{
                return({
                    trending:false,
                    home:false,
                    profile:true
                    
                } )
            })
        }}   style={{
                color: NavBarColor.profile?"#3377FA":""
                }
        }>{name}</p>
        </Link>
       
        
        </div>
       

        </div>
    </div>)
}
export default NavBar;