import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import "./../../styles/auth/auth.css"

import PasswordInput from "./PasswordInput";
import UsernameInput from "./UsernameInput";
import ChooseMod from "../Units/chooseMod";

const Auth = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const navigateToCodePage = () => {
        navigate('/');
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            username: username,
            password: password
        };

        fetch('http://localhost:8080/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.status === 401) {
                    setError('Пароль неверный!');
                } else if (response.status === 404) {
                    setError('Пользователь с данным Никнеймом не найден');
                } else if (response.status === 200) { // успешный статус ответа
                    return response.json("123"); // возвращаем данные для обработки
                } else {
                    setError('An error occurred. Please try again later.');
                }
            })
            .then(
                res => {
                    const token = res.token;
                    localStorage.setItem('token', token);
                    console.log(res.data)
                    navigateToCodePage();
                })
            .catch(error => {
                // Обработка сетевых ошибок или отклоненных запросов
                console.error(error);
            });
    };
    const handleRedirect = () => {
        setRedirect(true);
    };
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (

        <div className="wrapper_auth">
            <div className="container_auth">
                <div className="korobka_auth">
                    <div className="div_text">
                        <text className="text_login">
                            Войти в свою мастерскую
                        </text>
                        <div className="div_form">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <UsernameInput username={username} handleUsernameChange={handleUsernameChange}/>
                                    <PasswordInput password={password}
                                                   handlePasswordChangeonForm={handlePasswordChange}/>
                                </div>
                                <div className="button_conf_log_div">
                                    <button className="button_conf_reg_auth" type="submit">Войти</button>
                                    {error && <p className="error_text">{error}</p>}
                                </div>
                            </form>
                            <div className="div_text">
                                <label className="text_reg">Нет аккаунта?</label>
                            </div>
                            <div className="button_conf_reg_div">
                                <Link to = "/test" className='button_conf_reg_auth'>Зарегестрироваться</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Auth;