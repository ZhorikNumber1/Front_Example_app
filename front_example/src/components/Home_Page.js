import React from "react";
import {Link} from "react-router-dom";
import "../styles/mainPage/styles.css"

const HomePage = () => {
    return (
        <div className="container">

            <p className="text">CivModify: GarkPavel-made Civilization Mods</p>
            <Link to="/choosing_a_fashion_object" className="create-button">Create your unique mod</Link>
                <div id="containerr">
                     <button className="learn-more">
                         <span className="circle" aria-hidden="true">
                             <span className="icon arrow"></span>
                         </span>
                        <span className="button-text">Learn More</span>
                     </button>
                </div>
         </div>);
};

export default HomePage;