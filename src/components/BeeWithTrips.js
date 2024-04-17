import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../config.json'

const BeeWithTrips = ({token}) => {
    const { id } = useParams();
    const [bee, setBee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [inputId, setInputId] = useState('');


    useEffect(() => {
        const fetchBeeWithTrips = async () => {
            try {
                const response = await fetch(`${data.api}/Bee/api/showBeeWithTrips/${id}`,
                    {method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }});
                if (response.ok) {
                    const beeWithTrips = await response.json();
                    setBee(beeWithTrips);
                } else {
                    console.error('Error fetching bee details:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching bee details:', error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBeeWithTrips();
    }, [id]);

    const handleShowBeeClick = () => {
        if (inputId) {
            window.location.href = `/showBeeWithTrips/${inputId}`;
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!bee) {
        return <p>Bee not found</p>;
    }

    return (
        <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#D2B48C' }}>
            <h1 style={{ color: 'black' }}>Show Bee With Trips</h1>
            <input
                type="text"
                placeholder="Enter Bee ID"
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
                style={{ marginBottom: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
            />

            <Link to={`/showBeeWithTrips/${inputId}`}>
                <button style={{ backgroundColor: '#008CBA', color: 'white', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}>Show Bee With Trips</button>
            </Link>

            <h2 style={{ color: 'black' }}>Bee Details</h2>
            <p>ID: {id}</p>
            <p>Nickname: {bee.nickname}</p>
            <p>Id Role: {bee.id_Role}</p>
            <p>Role: {bee.role}</p>

            <h3 style={{ color: 'black' }}>Trips:</h3>
            {bee.tripDtos.length > 0 ? (
                <ul>
                    {bee.tripDtos.map((trip) => (
                        <li key={trip.id_Trip}>
                            <p>Trip ID: {trip.id_Trip}</p>
                            <p>Start Date: {new Date(trip.startDate).toLocaleDateString()}</p>
                            <p>End Date: {new Date(trip.endDate).toLocaleDateString()}</p>
                            <p>Description: {trip.description}</p>
                            <p>Objective: {trip.objective}</p>

                            <h4 style={{ color: 'black' }}>Places:</h4>
                            {trip.places.length > 0 ? (
                                <ul>
                                    {trip.places.map((place) => (
                                        <li key={place.name}>
                                            <p>Name: {place.name}</p>
                                            <p>Location: {place.location}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No places for this trip</p>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No trips for this bee</p>
            )}
        </div>

    );
};

export default BeeWithTrips;
