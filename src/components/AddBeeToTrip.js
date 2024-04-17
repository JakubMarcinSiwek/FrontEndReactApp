import data from '../config.json'
import React from 'react';
import AssignBeeToTripForm from './AssignBeeToTripForm';

const AddBeeToTrip = (props) => {

    const {token,role}=props
    const handleAssignBeeToTrip = async (beeId, tripId) => {
        try {
            const response = await fetch(`${data.api}/Bee/api/addBeeToTrip?idb=${beeId}&idt=${tripId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ idb: beeId, idt: tripId }),
            });

            if (response.ok) {
                const data = await response.json();
            }
        } catch (error) {
            console.error('Error assigning bee to trip', error.message);
        }
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2 style={{ color: 'black' }}>Assign Bee to Trip</h2>
            <AssignBeeToTripForm onAssignBeeToTrip={handleAssignBeeToTrip} role={role} token={token} />
        </div>

    );
};

export default AddBeeToTrip;
