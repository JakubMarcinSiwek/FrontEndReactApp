import React, { useState } from 'react';
import data from '../config.json'

const AssignPlaceForm = ({ onAssignPlace ,token}) => {
    const [placeId, setPlaceId] = useState('');
    const [tripId, setTripId] = useState('');

    const handlePlaceIdChange = (e) => {
        setPlaceId(e.target.value);
    };

    const handleTripIdChange = (e) => {
        setTripId(e.target.value);
    };

    const handleAssignPlace = async () => {
        try {
            const response = await fetch(`${data.api}/Bee/api/assignPlace?idP=${placeId}&idT=${tripId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const result = await response.json();
                onAssignPlace(result);
                setPlaceId('');
                setTripId('');
            } else {
                console.error('Error assigning place:', response.statusText);
            }
        } catch (error) {
            console.error('Error assigning place:', error.message);
        }
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <label style={{ display: 'block', margin: '10px 0', color: 'black' }}>
                Place ID:
                <input
                    type="text"
                    value={placeId}
                    onChange={handlePlaceIdChange}
                    style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </label>
            <label style={{ display: 'block', margin: '10px 0', color: 'black' }}>
                Trip ID:
                <input
                    type="text"
                    value={tripId}
                    onChange={handleTripIdChange}
                    style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </label>
            <button
                onClick={handleAssignPlace}
                style={{
                    backgroundColor: '#a52a2a',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Assign Place to Trip
            </button>
        </div>

    );
};

export default AssignPlaceForm;
