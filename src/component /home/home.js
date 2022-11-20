import React from "react";
import NavBar from "../navbar/Nav";
import "./home.css";
import Leftbar from "../leftsidebar/leftbar";
import Rightbar from "../rightsidebar/rightbar";
import PostHashtag from "../posthashtag/posthastag";
import Post from "../post/post";


const dummy=[{
    id:"2",
    tag:"summer_food",
    created_by:"mahip Adhikari",
    post:"#Elon actually knows that the #tech #bubble is busting & #jobs are drying up. He is right, that is happening, But unaware, thanks to security issues, western nations now hire within & don’t outsource to 3rd world countries for cheap #IT #employees. Too many spies"
    
},
{
    id:"2",
    tag:"summer_food",
    created_by:"mahip Adhikari",
    post:"#Elon actually knows that the #tech #bubble is busting & #jobs are drying up. He is right, that is happening, But unaware, thanks to security issues, western nations now hire within & don’t outsource to 3rd world countries for cheap #IT #employees. Too many spies"

},
{
    id:"2",
    tag:"summer_food",
    created_by:"mahip Adhikari",
    post:"#Elon actually knows that the #tech #bubble is busting & #jobs are drying up. He is right, that is happening, But unaware, thanks to security issues, western nations now hire within & don’t outsource to 3rd world countries for cheap #IT #employees. Too many spies"

}]

function Home(){
    return(
        <div className="Home">
        <div className="home-nav">
        <NavBar/>
        </div>
         
       <div className="Home-grid">
       <div className="response1"><Leftbar /></div>
       
       <div className="Home-Container">
       <PostHashtag />
  
       {dummy.map((item)=>{
       return(
        <Post 
                key={item.id}
                tag={item.tag}
                created={item.created_by}
                post={item.post}
        />
        ) 
       })}
       </div>
      
      <div className="response2"><Rightbar /></div>
        

       </div>
      
        </div>
    )
}
export default Home;
