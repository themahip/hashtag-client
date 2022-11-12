import React  from "react";
import "./nav.css";
import Logo from "./public/logo.png";
import Home from "./public/home.png";
import Notification from "./public/notification.png";
import Profile from "./public/profile.png";
import Trending from "./public/trending.png";

function NavBar(){
    return(<div className="home-nav">
        <div className="Nav-bar">
        <div className="Nav-container">
        <img  className="Nav-pic" src={Logo}/>
        <input className="searchbar" placeholder="Search Hashtag ......"></input>
        <img className="Nav-pic" src={Home}/>
        <img className="Nav-pic" src={Trending}/>
        <img className="Nav-pic" src={Notification}/>
        <img className="Nav-pic" src={Profile}/>
        <p>John doe</p>
       
        </div>
       

        </div>
    </div>)
}
export default NavBar;