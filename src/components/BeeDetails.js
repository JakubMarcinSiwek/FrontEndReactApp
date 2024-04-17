import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../config.json'

const BeeDetails = (props) => {
    const { id } = useParams();
    const [bee, setBee] = useState(null);
    const {token}=props

    useEffect(() => {

        fetch(`${data.api}/Bee/api/showBee/${id}`, {
            method: 'GET',
            headers: {
                'accept': '*/*',
                'Authorization': `Bearer ${token}`
            },})
            .then(response => response.json())
            .then(data => setBee(data))
            .catch(error => console.error('Error fetching bee details:', error));
    }, [id]);

    return (
        <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            {bee ? (
                <>
                    <h1 style={{ color: 'black' }}>Bee Details</h1>
                    <p>ID: {bee.id_Bee}</p>
                    <p>Nickname: {bee.nickname}</p>
                    <p>Role: {bee.role}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>

    );
};

export default BeeDetails;
