import React from 'react';
import CreateTripForm from './CreateTripForm';

const CreateTripPage = (props) => {
    const {token}=props
    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1 style={{ color: 'black' }}>Create Trip Page</h1>
            <CreateTripForm token={token} />
        </div>

    );
};

export default CreateTripPage;
