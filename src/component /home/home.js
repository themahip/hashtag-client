import React from "react";
import NavBar from "../navbar/Nav";
import "./home.css";
import Leftbar from "../leftsidebar/leftbar";
import Rightbar from "../rightsidebar/rightbar";
import PostHashtag from "../posthashtag/posthastag";
import Post from "../post/post";
import Test from "../test/test";
function Home(){
    return(
        <div className="Home">
        <div className="home-nav">
        <NavBar/>
        </div>
         
       <div className="Home-grid">
       <Leftbar />
       <div className="Home-Container">
       <PostHashtag />
  
       <Post />
       <Post/>
       <Post/>
       <Post/>
       <Post/>
       </div>
      
        <Rightbar/>

       </div>
      
        </div>
    )
}
export default Home;
