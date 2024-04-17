import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BeeWithTrips from "./BeeWithTrips";
const BeeWith = (props) => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const {token}=props;

    const handleButtonClick = () => {
        navigate(`/showBeeWithTrips/${inputValue}`);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            <h2 style={{ color: 'black' }}>Bee With</h2>

            <input
                type="text"
                placeholder="Enter Bee ID"
                value={inputValue}
                onChange={handleInputChange}
                style={{ padding: '5px', margin: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />

            <button
                onClick={handleButtonClick}
                style={{ backgroundColor: 'orange', color: 'white', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}
            >
                Get Bee Details
            </button>

            <BeeWithTrips token={token} />
        </>

    );
};

export default BeeWith;