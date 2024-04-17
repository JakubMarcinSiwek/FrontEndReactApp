import React, { useState } from 'react';
import data from '../config.json'

const CreateTripForm = ({ onCreateTrip, token}) => {
    const [objective, setObjective] = useState('');
    const [description, setDescription] = useState('');

    const handleObjectiveChange = (e) => {
        setObjective(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleCreateTrip = async () => {
        try {
            const response = await fetch(`${data.api}/Bee/api/createTrip`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    objective,
                    description,
                }),
            });

            if (response.ok) {
                const result = await response.json();
                onCreateTrip(result);
                setObjective('');
                setDescription('');
            } else {
                console.error('Error creating trip:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating trip:', error.message);
        }
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2 style={{ color: 'black' }}>Create Trip</h2>
            <label style={{ display: 'block', margin: '10px 0', color: 'black' }}>
                Objective:
                <input
                    type="text"
                    value={objective}
                    onChange={handleObjectiveChange}
                    style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </label>
            <br />
            <label style={{ display: 'block', margin: '10px 0', color: 'black' }}>
                Description:
                <textarea
                    value={description}
                    onChange={handleDescriptionChange}
                    style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </label>
            <br />
            <button
                onClick={handleCreateTrip}
                style={{ backgroundColor: 'orange', color: 'white', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}
            >
                Create Trip
            </button>
        </div>

    );
};

export default CreateTripForm;
