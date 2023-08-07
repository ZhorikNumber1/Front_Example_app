import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/Home_Page";
import choosing_a_fashion_object from "./components/choosing_a_fashion_object";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element = {<HomePage/>}/>
                <Route path="/choosing_a_fashion_object" element = {<choosing_a_fashion_object/>}/>
            </Routes>

        </BrowserRouter>

    );
};

export default App;