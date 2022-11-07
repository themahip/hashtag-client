import {useState,React} from "react";
import {Link }from "react-router-dom";

import axios from 'axios';
import Logo from "./public/logo.png"
import "./signup.css"
import googleLogo from "./public/googleLogo.png"
import image from "./public/image.png"

function Signup(){
    const [Name, setName]=useState("");
    const [username, setUsername]=useState("");
    const [Email, setEmail]=useState("");
    const [Password, setPassword]=useState("");
    const [ConfirmPassword, setConfirmPassword]=useState("");
    
    const [Contact,setContact]=useState("");
    
    function Add(){
        axios.post("https://hashtagnp.herokuapp.com/user/",{
            name:Name,
            username:username,
            email:Email,
            password:Password,
            ConfirmPassword:ConfirmPassword
        }).then((res)=>{
            console.log(res.data);
        })
    }
    return(
        <div>
            <div className="flex-container">
                <div className="left">
                <img className="logo" src={Logo}/>
                <h1>Welcome, to HashTag</h1>
                <p className="proceed">please proceed to login </p>
                <div className='google'>
                <div className='innerGoogle'>
                <img className='google-logo' src={googleLogo}/>
                    <p className='login-google'>login with google</p>
                </div>
                </div>
                <hr className='hr1'/>

            <p className='or'>or</p>
            <hr className='hr2'/>
            <br/>

                <input className="signup-input" placeholder="Name" onChange={(event)=>{
                setName(event.target.value);
            }}/>
            <br/>
              <input className="signup-input" type="username" placeholder="User Name" onChange={(event)=>{
                setUsername(event.target.value);
            }}/>
            <br/>
              <input  className="signup-input"type="Email" placeholder="Email" onChange={(event)=>{
                setEmail(event.target.value);
            }}/>
            <br/>
            <input className="signup-input" type="Password" placeholder="password" onChange={(event)=>{
                setPassword(event.target.value);
            }}/>
            <br/>
            <input className="signup-input" type="Password"  placeholder="Confirm Password" onChange={(event)=>{
                setConfirmPassword(event.target.value);
            }}/>
            <br/>

            <button onClick={Add}>signup</button>
            <p>Already have an account? <span><Link to="/login">Login</Link></span></p>
                </div>
                <img className="image" src={image}/>
            </div>
            
            
        </div>
    )
    
}
export default Signup;