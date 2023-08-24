import React, {Component, useEffect, useState} from "react";
import "../../styles/chooseUnit/backgrounf.css";
import "../../styles/chooseUnit/text-unit-photo.css";
import axios from 'axios';
import Tooltip from "./../tooltip/Tooltip"
import {render} from "@testing-library/react";
import '../../styles/chooseUnit/input-style.css'

export default function ChooseUnit() {
    const [modName, setModName] = useState('');

    const handleDownload = () => {
        fetch(`http://localhost:8080/api/v1/dowland/${modName}`, {
            method: 'GET'
        })
            .then(response => response.blob())
            .then(blob => {
                // Создание ссылки для скачивания файла
                const url = URL.createObjectURL(blob);

                // Создание ссылки для скачивания мода
                const a = document.createElement('a');
                a.href = url;
                a.download = `${modName}.zip`;
                a.click();

                // Освобождение ресурсов
                URL.revokeObjectURL(url);
            })
            .catch(error => {
                // Обработка ошибки
                console.error(error);
            });
    };
    const [userUnit, setUserUnit] = useState({name: '', unit_Type: '', cost: '', id: '', baseMoves: '', combat: '', nameMode: ''});

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = unitInfo.id;
        // Отправка POST-запроса на бекенд с помощью fetch или axios
        fetch('http://localhost:8080/api/v1/create_mod', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },  body: JSON.stringify({
                ...userUnit,
                id: id // добавьте значение id в объект userUnit
            })
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
        setUserUnit({...userUnit, [event.target.name]: event.target.value});
    };
    const [units, setUnits] = useState([]);

    useEffect(() => {
        getUnits();
    }, []);

    const getUnits = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/units");
            setUnits(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const [unitInfo, setUnitInfo] = useState('');

    const fetchUnitInfo = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/units/${id}`);
            const data = await response.json();
            setUnitInfo(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='background_creating'>
            <div className='background_serch'>
                <div className="text-search-unit-title">
                    Выберите Юнит
                </div>
                <div>
                    {units.map((unit) => (
                        <div key={unit.name} className="barder_style">
                            <button className='text-unit-photo' src={`data:image/png;base64,${unit.photoURL}`}
                                    onClick={() => fetchUnitInfo(unit.name)}>{unit.name}</button>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="margin-left">
                    <div className="korobka">
                        <div className="popolam">
                            <div key={unitInfo.name}>
                                <div className="photo_unit_in_korobka">
                                    <img src={`data:image/png;base64,${unitInfo.photoURL}`}/>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="div-size-update-unit">
                                    <Tooltip
                                        position="top"
                                        content="Это имя будет присовенно юниту внутри игры">
                                        <text className="text-title-parameters">Имя</text>
                                    </Tooltip>
                                </div>
                                <text>{unitInfo.name}</text>
                                <div className="div-size-update-unit">
                                    <Tooltip
                                        position="top"
                                        content="Сколько производства или денег надо, чтобы произвести или купить этого юнита">
                                        <text className="text-title-parameters">Стоимость производства</text>
                                    </Tooltip>
                                </div>
                                <div className="div-size-update-unit">
                                    <input
                                        className="input-main"
                                        type="number"
                                        name="cost"
                                        min="1"
                                        max="9999"
                                        value={userUnit.cost}
                                        onChange={handleChange}
                                        placeholder={unitInfo.cost}
                                    />
                                </div>
                                <div className="div-size-update-unit">
                                    <Tooltip
                                        position="top"
                                        content="Все мобильные юниты имеют определенное количество  очков перемещения, которые они могут потратить за один ход. Если у юнита закончились  ОП, он не может перемещаться до начала следующего хода. Юниты расходуют  очки перемещения, чтобы двигаться по клеткам, атаковать другие юниты или грабить улучшения и районы. Количество затрачиваемых очков зависит от ландшафта клетки.">
                                        <text className="text-title-parameters">Очки передвежения</text>
                                    </Tooltip>
                                </div>
                                <div className="div-size-update-unit">
                                    <input
                                        className="input-main"
                                        type="number"
                                        name="baseMoves"
                                        min="1"
                                        max="9999"
                                        value={userUnit.baseMoves}
                                        onChange={handleChange}
                                        placeholder={unitInfo.baseMoves}
                                    />
                                </div>
                                <div>
                                    {unitInfo.combat !== "-1" ? (
                                        <div>
                                        <div className="div-size-update-unit">
                                            <Tooltip
                                                    position="top"
                                                    content="Боевая мощь - определяет общую силу отряда. Для юнитов ближнего боя это включает как их наступательную, так и оборонительную мощь; для юнитов дальнего боя это включает только их оборонительную мощь (используется только при нападении).">
                                                    <text className="text-title-parameters">Боевая мощь</text>
                                            </Tooltip>
                                        </div>
                                        <div className="div-size-update-unit">
                                            <input
                                                className="input-main"
                                                type="number"
                                                name="combat"
                                                min="1"
                                                max="9999"
                                                value={userUnit.combat}
                                                onChange={handleChange}
                                                placeholder={unitInfo.combat}
                                            />
                                        </div>
                                        </div>
                                        ) : (
                                        <div>

                                        </div>
                                        )}
                                </div>

                                <div className="div-size-update-unit">
                                    <input
                                        className="input-main"
                                        type="text"
                                        name="nameMode"
                                        value={userUnit.nameMode}
                                        onChange={handleChange}
                                        placeholder="Название вашего мода"
                                    />
                                </div>
                                <div>
                                    <button className="button-confirm" type="submit">Сохранить</button>
                                </div>

                            </form>
                            <div>
                                <input
                                    type="text"
                                    value={modName}
                                    onChange={event => setModName(event.target.value)}
                                />
                                <button onClick={handleDownload}>Скачать</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}