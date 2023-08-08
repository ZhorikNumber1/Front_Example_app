import React from "react";
import {Link} from "react-router-dom";
import "./../styles/Chossing_botton/Unit_botton.css"
import "./../styles/Chossing_botton/Building_bottin.css"
import "./../styles/Chossing_botton/Civilization_bottin.css"

const Unit_create = () => {
    return (
        <div className="container_unit">
            <button className="create-button_unit">Create your unit</button>
            <button className="create-button_building">Create your building</button>
            <button className="create-button_building">Create your city-ctate</button>
            <button className="create-button_civilization">Create your civilization</button>
        </div>

    );
};

export default Unit_create;