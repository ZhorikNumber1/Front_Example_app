import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import ChooseMod from "./components/chooseMod";
import UpdateUnit from "./components/updateUnit";
export default function Routing(){
    return(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element = {<HomePage/>}/>
            <Route exact path='/chooseMod' element={<ChooseMod/>}/>
            <Route exact path = "/about" element={<About/>}/>
            <Route exact path = "/chooseMod/UpdateUnit" element={<UpdateUnit/>}/>
        </Routes>
    </BrowserRouter>
    )
}
