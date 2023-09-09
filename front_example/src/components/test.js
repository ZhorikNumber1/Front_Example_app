import React, { useState } from 'react';
import "./../styles/auth/auth.css"
import PasswordInput from "./Auth/PasswordInput";
import UsernameInput from "./Auth/UsernameInput";
const Test = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Ваши действия при отправке формы
    };
    return(

    <div className="wrapper_auth">
        <div className="container_auth">
            <div className="korobka_auth">
                <div className="div_text">
                    <text className="text_login">
                        Добро пожаловть в CivModify! Для того чтобы пользоваться мастерской надо создать аккаунт!
                    </text>
                    <div className="div_form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <UsernameInput username={username}  handleUsernameChange={handleUsernameChange} />
                                <PasswordInput newPassword ={password} handlePasswordChangeonform={handlePasswordChange}/>
                                <PasswordInput newPassword ={password} handlePasswordChangeonform={handlePasswordChange}/>
                            </div>
                            <div className="button_conf_log_div">
                                <button className="button_conf_reg_auth" type="submit">Войти</button>
                            </div>
                        </form>
                        <div  className="div_text">
                            <label className="text_reg">Нет аккаунта?</label>
                        </div>
                        <div className = "button_conf_reg_div">
                            <button className = "button_conf_reg_auth">
                                Зарегестрироваться
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
};

export default Test;