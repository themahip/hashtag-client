import React,{useState} from 'react';
import Logo from './public/logo.png';
import {Link} from "react-router-dom"
import googleLogo from './public/googleLogo.png';
import image from './public/image.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';
import baseurl from "../../config";
function Login(){
    let navigate=useNavigate();
  const [username, setUserName]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");

    const  Add=(event)=>{
       
        
        axios.post(`${baseurl}/api/user/login/`,{
            username:username,
            password:password,
        
        }).then((res)=>{
        
            if(!res.data.error){
                const token =JSON.stringify(res.data.token);
                localStorage.setItem("jwt", token);
                navigate("/")
                setError("")
                
            }
            else{
           
            setError("Password Invalid")
            }
        

        })
    }
    return(
        <div className='main-login'>
        <div className='flex-container'>
        <div className='left'><img className='Logo' src={Logo}/>
        <h1 className='welcome'>Welcome to, Hashtag </h1>
        <p className='proceed'>Please proceed to Login</p>
            <div className='google'>
                <div className='innerGoogle'>
                <img className='google-logo' src={googleLogo}/>
                    <p className='login-google'>login with google</p>
                </div>
            </div>
            <div className='line'>
            <hr className='hr1'/>
            <p className='or'>or</p>
            <hr className='hr2'/>
            </div>
            <div clasName='forms'>
         
                <input 
                className='email'
                type='email' 
                onChange={(event)=>{
                    setUserName(event.target.value)
                }} 
                 placeholder='username'/>

                <br />

                <input className='email'type='password' onChange={(event)=>{
                    setPassword(event.target.value)
                   
                }} placeholder='Password'  />

            </div>
            <div className='BOX'>
                <input className="check"type='checkbox'/>
                <p  className='remember'>Remember</p>
                <p className='forget'>Forget password</p>
            </div>
            
                <button className="Login" onClick={Add}>Login</button>
                <p style={{color:"red"}}>{error}</p>
                <div className='else'>
                    <p>Don't have an account? <span className='signup'><Link to="/signup">Signup</Link></span></p></div>
                </div>
                <img className="image" src={image}/>
        </div>
       
          
        </div>
        
    )
}
export default Login;