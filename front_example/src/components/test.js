import React, { useState } from 'react';

const Test = () => {
    const [userUnit, setUserUnit] = useState({ name: '', unit_Type: '', cost: '', id: '' });

    const handleSubmit = (event) => {
        event.preventDefault();

        // Отправка POST-запроса на бекенд с помощью fetch или axios
        fetch('http://localhost:8080/api/v1/create_mod', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userUnit)
        })
            .then(response => response.json())
            .then(data => {
                // Обработка ответа от сервера
                console.log(data);
            })
            .catch(error => {
                // Обработка ошибки
                console.error(error);
            });
    };

    const handleChange = (event) => {
        setUserUnit({ ...userUnit, [event.target.name]: event.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={userUnit.name}
                onChange={handleChange}
                placeholder="Имя мода"
            />
            <input
                name="unit_Type"
                value={userUnit.unit_Type}
                onChange={handleChange}
                placeholder="тип юнита"
            />
            <input
                name="cost"
                value={userUnit.cost}
                onChange={handleChange}
                placeholder="кост"
            />
            <input
                name="id"
                value={userUnit.id}
                onChange={handleChange}
                placeholder="ид"
            />
            <button type="submit">Отправить</button>
        </form>
    );
};

export default Test;