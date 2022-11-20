import React,{useState} from 'react';
import Logo from './public/logo.png';
import {Link} from "react-router-dom"
import googleLogo from './public/googleLogo.png';
import image from './public/image.png';
import './login.css';
function Login(){
    const [loginInfo, setLoginInfo]=useState({
        email:"",
        password:""
    });
function handle(event){
    const {value,name }=event.target;
    setLoginInfo(pre=>{return{
    ...pre,
    [name]:value
    }});
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
         
                <input className='email'type='email' onChange={handle} name="email" placeholder='Email' value={loginInfo.email} />
                <br />
                <input className='email'type='Password' onChange={handle} name="password"placeholder='Password' value={loginInfo.password} />

            </div>
            <div className='BOX'>
                <input className="check"type='checkbox'/>
                <p  className='remember'>Remember</p>
                <p className='forget'>Forget password</p>
            </div>
            
                <button className="Login">Login</button>
                <div className='else'>
                    <p>Don't have an account? <span className='signup'><Link to="/signup">Signup</Link></span></p></div>
                </div>
                <img className="image" src={image}/>
        </div>
       
          
        </div>
        
    )
}
export default Login;