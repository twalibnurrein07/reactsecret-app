import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import Home from "./Home"

function Main(){
    return(
      
        <Routes> {/* The Routes decides which component to show based on the current URL.*/}
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
      </Routes>
      
    )
}

export default Main;