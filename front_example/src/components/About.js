import React from "react";
import "./../styles/about/aboutcss.css"
import {Link} from "react-router-dom";
const About = () =>{
    return(
        <div className='wrapper'>
            <text className="text">Information updated later</text>
            <Link to = "/" className="button_back">Назад</Link>
        </div>
    )
}
export default About;