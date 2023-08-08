import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/Home_Page";
import pickmod from "./components/Pick_Mod";
import Pick_Mod from "./components/Pick_Mod";
import Unit_create from "./components/Unit_create";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<HomePage/>}/>
                <Route path="/choosing_a_fashion_object" element={<Pick_Mod/>}/>
                <Route path='/create/unit_create' element={<Unit_create/>}/>
            </Routes>
        </BrowserRouter>

    );
};

export default App;