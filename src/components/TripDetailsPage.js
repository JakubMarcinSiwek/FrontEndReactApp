import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TripDetails from './TripDetails';

const TripDetailsPage = (props) => {
    const [tripId, setTripId] = useState('');
    const [showTripDetails, setShowTripDetails] = useState(false);
    const {token,role}=props;

    const handleIdInputChange = (event) => {
        setTripId(event.target.value);
    };

    const handleShowTripDetails = () => {
        setShowTripDetails(true);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid #8B4513', borderRadius: '8px', backgroundColor: '#FFF8DC' }}>
            <h2 style={{ color: '#8B4513' }}>Show Trip Details</h2>
            {!showTripDetails ? (
                <div>
                    <label style={{ display: 'block', margin: '10px 0', color: '#8B4513' }}>
                        Enter Trip ID:
                        <input
                            type="number"
                            value={tripId}
                            onChange={handleIdInputChange}
                            style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #8B4513' }}
                        />
                    </label>
                    <button
                        onClick={handleShowTripDetails}
                        style={{
                            backgroundColor: '#8B4513',
                            color: 'white',
                            padding: '10px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        Submit
                    </button>
                </div>
            ) : (
                <TripDetails match={{ params: { id: tripId } }} token={token} />
            )}
        </div>

    );
};

export default TripDetailsPage;
