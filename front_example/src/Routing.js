import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import chooseMod from "./components/ChooseMod";
import ChooseMod from "./components/ChooseMod";
export default function Routing(){
    return(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element = {<HomePage/>}/>
            <Route exact path='/chooseMod' element={<ChooseMod/>}/>
        </Routes>
    </BrowserRouter>
    )
}
