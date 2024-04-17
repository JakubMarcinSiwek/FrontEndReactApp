import React, { useState } from 'react';

const AssignBeeToTripForm = ({ onAssignBeeToTrip },props) => {
    const [beeId, setBeeId] = useState('');
    const [tripId, setTripId] = useState('');
    const {token,role}=props;

    const handleBeeIdChange = (e) => {
        setBeeId(e.target.value);
    };

    const handleTripIdChange = (e) => {
        setTripId(e.target.value);
    };

    const handleAssignBeeToTrip = () => {
        onAssignBeeToTrip(beeId, tripId);
        setBeeId('');
        setTripId('');
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <label style={{ display: 'block', margin: '10px 0', color: 'black' }}>
                Bee ID:
                <input
                    type="number"
                    value={beeId}
                    onChange={handleBeeIdChange}
                    style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </label>
            <label style={{ display: 'block', margin: '10px 0', color: 'black' }}>
                Trip ID:
                <input
                    type="number"
                    value={tripId}
                    onChange={handleTripIdChange}
                    style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </label>
            <button
                onClick={handleAssignBeeToTrip}
                style={{
                    backgroundColor: '#ffa500',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Assign Bee to Trip
            </button>
        </div>

    );
};

export default AssignBeeToTripForm;
