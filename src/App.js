import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component /login/login';
import Signup from './component /signup/signup';
import Home from "./component /home/home";


function App(){
  return(
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/home" element={<Home />}/>
    </Routes>
    
    </BrowserRouter>
   
   </div>
  )
 }
export default App;
