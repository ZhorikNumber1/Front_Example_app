import React from "react";
import {Link} from "react-router-dom";
import "./../styles/chooseMod/container.css"
import "./../styles/chooseMod/text.css"
import "./../styles/chooseMod/button.css"
const chooseMod = () => {
    return (
        <div className="container">
            <text className="text_mod">Выберите какой фрагмент игры вы хотел бы изменить</text>
            <button className='button_unit'>Изменения Юнита</button>
            <button className='button_unit'>Изменения Юнита</button>
            <button className='button_unit'>Изменения Юнита</button>
            <button className='button_unit'>Изменения Юнита</button>
        </div>

    );
};

export default chooseMod;