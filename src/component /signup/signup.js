import {useState,React} from "react";
import {Link }from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import baseurl from "../../config";
import Logo from "./public/logo.png"
import "./signup.css"
import googleLogo from "./public/googleLogo.png"
import image from "./public/image.png"

function Signup(){
    let navigate = useNavigate();
    const [Fname, setFname]=useState("");
    const [Lname,setLname]=useState("");
    const [username, setUsername]=useState("");
    const [Email, setEmail]=useState("");
    const [Password, setPassword]=useState("");
    const [error, setError]=useState("");
   
    const Add=async(e)=>{
        e.preventDefault();
        axios.post(`${baseurl}/api/user/`,{
            first_name:Fname,
            last_name:Lname,
            username:username,
            email:Email,
            password:Password,
        
        }).then((res)=>{
         
            if(res.status===201){
                
                navigate("/login");
            }
            else{
           
            setError(res.data.error);
                           navigate("/signup")
            }
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

                <input className="signup-input" placeholder="First Name" onChange={(event)=>{
                setFname(event.target.value);
            }}/>
            <br/>
            <input className="signup-input" placeholder="Last Name" onChange={(event)=>{
                setLname(event.target.value);
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
            


            <button onClick={Add}>signup</button>
            <p style={{color:"red"}}>{error}</p>
            <br/>
            <p>Already have an account? <span><Link to="/login">Login</Link></span></p>
                </div>
                <img className="image" src={image}/>
            </div>
            
            
        </div>
    )
    
}
export default Signup;