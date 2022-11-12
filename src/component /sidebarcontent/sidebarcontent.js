import React from "react";
import "./side.css";

function LeftSidebarcontent(){
    return <div className="contentsss">
 
        <h2>Your Hashtag</h2>
        <p># love</p>
        <p>#Education</p>
        <p>#kathmandu_university</p>
        <p>#Horror_stories</p>
        <p className="view">View All</p>
    </div>
}
function RightSidebarcontent(){
    return(
        <div className="contentsss">
 
        <h3>Suggested HashTags</h3>
        <p># Nepal</p>
        <p># Education</p>
        <p># Visit_Nepal</p>
        <p># It_Meet_2022</p>
       <h3>Trending Hashtag</h3>
       <p>#Photooftheday</p>
       <p>#Travel</p>
       <p>#Fun</p>
       <p>#Music</p>
    </div>
    )
}
export {LeftSidebarcontent,RightSidebarcontent};