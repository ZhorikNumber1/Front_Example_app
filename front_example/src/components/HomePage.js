import React from "react";
import { Link } from "react-router-dom";
import "./../styles/HomePage/HomePage.css"

const HomePage = () => {
    return (
        <div className="wrapper">
            <div className='container_button'>
                <text className="text">Добро пожаловать в мастерскую по созданию модов для Civ 6</text>
                <Link to = "/chooseMod" className='button'>Создать собственный мод</Link>
                <Link to= "https://github.com/ZhorikNumber1/Front_Example_app" className = "button_github">github</Link>
            </div>
        </div>
    );
};

export default HomePage;