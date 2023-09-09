import React, { useState } from "react";
import "./../../styles/auth/text_auth.css";

function UsernameInput({ username, handleUsernameChange }) {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div style={{ position: 'relative', display: 'flex' }}>
            <input
                type="text"
                id="username"
                value={username}
                className={`input_auth_test ${isFocused ? 'active' : ''}`}
                placeholder=""
                onChange={handleUsernameChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <span
                className={`input_auth_placeholder ${isFocused || username ? 'active' : ''}`}
            >
                НикНейм
            </span>
        </div>
    );
}

export default UsernameInput;