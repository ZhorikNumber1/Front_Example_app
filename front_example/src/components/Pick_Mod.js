import React from "react";
import {Link} from "react-router-dom";
import "./../styles/Chossing_botton/Unit_botton.css"
import "./../styles/Chossing_botton/Building_bottin.css"
import "./../styles/Chossing_botton/Civilization_bottin.css"
import point from './../img/Builder_(Civ6).png'

const Pick_Mod = () => {
    return (
        <div className="container_unit">
            <Link to="/create/unit_create" className="create-button_unit">Create your unit</Link>
            <button className="create-button_building">Create your building</button>
            <button className="create-button_building">Create your city-ctate</button>
            <button className="create-button_civilization">Create your civilization</button>
        </div>

    );
};

export default Pick_Mod;