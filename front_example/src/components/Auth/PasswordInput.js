import React, { useState } from "react";
import "./../../styles/auth/auth.css"
import closeEyeImg from "./../Img/close_eye.png";
import openEyeImg from "./../Img/open_eye.png";
import "./../../styles/auth/text_auth.css"

function PasswordInput({ newPassword, handlePasswordChangeonForm }) {
    const [password, setPassword] = useState(newPassword);
    const [setShowPassword, showPassword] = useState();
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        handlePasswordChangeonForm(event); // вызов функции из основного компонента
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    return (
        <div >
            <div style={{ position: 'relative', display: 'flex'}}>
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder=""
                    value={password}
                    className={`input_auth ${isFocused ? 'active' : ''}`}
                    onChange={handlePasswordChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <button
                    className="hide_and_seeek"
                    onClick={togglePasswordVisibility}
                    style={{ position: 'absolute', right: '10px', top: '40%', transform: 'translateY(-50%)' }}
                >
                    <img className="photo_eye"
                         src={showPassword ? openEyeImg : closeEyeImg}
                         alt={showPassword ? "Hide password" : "Show password"}
                    />
                </button>
                <span
                    className={`input_auth_placeholder ${isFocused || password ? 'active' : ''}`}
                >
                Пароль
            </span>
                <button className="button_conf_log" >
                    Забыли пароль
                </button>
            </div>
        </div>
    );
}

export default PasswordInput;
