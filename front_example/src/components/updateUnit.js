import React, {Component, useEffect, useState } from "react";
import "./../styles/UpdateUnit/backgrounf.css";
import axios from 'axios';
import {render} from "@testing-library/react";

class UpdateUnit extends Component {
    state = {
        photoUrl: null,
    };
    componentDidMount() {
        this.fetchPhoto();
    }
    fetchPhoto = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/Builder_(Civ6).png", {
                responseType: "arraybuffer",
            });

            const base64Image = btoa(
                new Uint8Array(response.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ""
                )
            );

            this.setState({ photoUrl: `data:image/png;base64,${base64Image}` });
        } catch (error) {
            console.error(error);
        }
    };
    render() {
        const { photoUrl } = this.state;
        return (
            <div>
                {photoUrl && <img src={photoUrl} alt="Photo" />}
            </div>
        );
    }
}
export default UpdateUnit;