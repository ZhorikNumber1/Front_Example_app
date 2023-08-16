import React, {Component, useEffect, useState } from "react";
import "./../styles/UpdateUnit/backgrounf.css";
import "./../styles/UpdateUnit/text-unit-photo.css";
import axios from 'axios';
import {render} from "@testing-library/react";

export default function ChooseUnit() {
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
        return(
        <div className='background_creating'>
            {units.map((unit) => (
                <div key={unit.name}>
                    <div className="image-wrapper" onClick={() => { window.location.href = `http://localhost:8080/api/v1/units/${unit.name}`}}>
                        <img src={`data:image/png;base64,${unit.photoURL}`} alt={unit.namePhoto}/>
                        <text className='text-unit-photo'>{unit.name}</text>
                    </div>

                </div>
            ))}
        </div>
        )
}