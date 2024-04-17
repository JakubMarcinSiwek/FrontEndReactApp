import data from '../config.json'
import React, { useState, useEffect } from 'react';

const TripDetails = ({ match ,token}) => {
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchTripDetails = async () => {
            try {
                const response = await fetch(`${data.api}/Bee/api/getTrip/${match.params.id}`,
                    {method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        }});
                if (response.ok) {
                    const tripDetails = await response.json();
                    setTrip(tripDetails);
                } else {
                    console.error('Error fetching trip details:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching trip details:', error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTripDetails();
    }, [match.params.id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!trip) {
        return <p>Trip not found</p>;
    }

    return (
        <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid #8B4513', borderRadius: '8px', backgroundColor: '#FFF8DC' }}>
            <h2 style={{ color: '#8B4513' }}>Trip Details</h2>
            <p style={{ color: '#8B4513' }}>Start Date: {new Date(trip.startDate).toLocaleDateString()}</p>
            <p style={{ color: '#8B4513' }}>End Date: {new Date(trip.endDate).toLocaleDateString()}</p>
            <p style={{ color: '#8B4513' }}>Description: {trip.description}</p>
            <p style={{ color: '#8B4513' }}>Objective: {trip.objective}</p>

            <h3 style={{ color: '#8B4513' }}>Bees:</h3>
            {trip.bees.length > 0 ? (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {trip.bees.map((bee) => (
                        <li key={bee.nickname} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
                            {bee.nickname}
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ color: '#8B4513' }}>No bees for this trip</p>
            )}

            <h3 style={{ color: '#8B4513' }}>Places:</h3>
            {trip.places.length > 0 ? (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {trip.places.map((place) => (
                        <li key={place.name} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
                            <p style={{ color: '#8B4513' }}>Name: {place.name}</p>
                            <p style={{ color: '#8B4513' }}>Location: {place.location}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ color: '#8B4513' }}>No places for this trip</p>
            )}
        </div>

    );
};

export default TripDetails;
