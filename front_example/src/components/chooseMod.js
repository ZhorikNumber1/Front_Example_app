import React from "react";
import {Link} from "react-router-dom";
import "./../styles/chooseMod/container.css"
import "./../styles/chooseMod/text.css"
import "./../styles/chooseMod/button.css"

class ChooseMod extends React.Component {
    state = {
        showing: false
    }

    render() {
        const {showing} = this.state
        return (
            <div className="container">
                <text className="text_mod">Выберите какой фрагмент игры вы хотел бы изменить</text>
                <button onClick={() => this.setState({showing: !showing})} className='button_unit'>Юнит</button>
                {showing
                    ? <div>
                        <div className="container_text">
                            <text className="text_mod_pick">Что вы хотите сделать?</text>
                        </div>
                        <div className="container_text">
                            <Link to = "/chooseMod/UpdateUnit" className='button_unit_pick'>Заменить существующего</Link>
                            <button className='button_unit_pick_block'>Создать нового</button>
                        </div>
                    </div>
                    : null
                }
                <button className='button_unit_pick_block'>Здание</button>
                <button className='button_unit_pick_block'>Город-Государство</button>
                <button className='button_unit_pick_block'>Цивилизация</button>
            </div>

        );
    };
}

export default ChooseMod;