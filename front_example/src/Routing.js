import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import ChooseMod from "./components/Units/chooseMod";
import ChooseUnit from "./components/Units/chooseUnit";
import UpdateUnit from "./components/Units/updateUnit";
import Test from "./components/test"
import Auth from "./components/Auth/Auth";
export default function Routing(){
    return(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element = {<HomePage/>}/>
            <Route exact path='/chooseMod' element={<ChooseMod/>}/>
            <Route exact path = "/about" element={<About/>}/>
            <Route exact path = "/chooseMod/UpdateUnit" element={<ChooseUnit/>}/>
            <Route exact path="/chooseMod/UpdateUnit/Settler" element={<UpdateUnit/>}/>
            <Route exact path="/auth" element={<Auth/>}/>
            <Route exact path="/test" element={<Test/>}/>
        </Routes>
    </BrowserRouter>
    )
}
