import React from "react";
import { Link } from "react-router-dom";
import "./../styles/styles.css"

const HomePage = () => {
    return (
        <div className="container">
            <p className="text">CivModify: GarkPavel-made Civilization Mods</p>
            <Link to="/about" className="create-button">Create your unique mod</Link>
            
        </div>
    );
};

export default HomePage;