import React, {Component, useEffect, useState } from "react";
import axios from 'axios';
import {render} from "@testing-library/react";
import "../../styles/updateUnit/backgroung_updarteUnit.css"
import "../../styles/updateUnit/text_updateUnit.css"

export default function UpdateUnit() {
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
        <div className="background_updateUnit">
            <p className="text_updateunit">член</p>
        </div>
    )
}