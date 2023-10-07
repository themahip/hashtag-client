import React from 'react';
import { BrowserRouter, Routes, Route,useParams } from "react-router-dom";
import Login from './component /login/login';
import Signup from './component /signup/signup';
import Home from "./component /home/home";
import Tag from './component /tag/tag';
import Profile from './component /profile/profile';
import Trend from './component /trending/trendings';

import Search from './component /search/search';

function App(){
  let params=useParams();
  return(
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="" element={<Home />}/>
  <Route path="/trending" element={<Trend/>}/>
    <Route path="/:params" element={<Tag />}/>
    <Route path="/search" element={<Search/>}/>
    <Route path="/Profile" element={<Profile />}/>
    </Routes>
    
    </BrowserRouter>
   
   </div>
  )
 }
export default App;
