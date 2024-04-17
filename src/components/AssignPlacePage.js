import React from 'react';
import AssignPlaceForm from './AssignPlaceForm';

const AssignPlacePage = (props) => {

    const {token}=props

    return (
        <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h1 style={{ color: '#a52a2a' }}>Assign Place to Trip Page</h1>
            <AssignPlaceForm token={token} />
        </div>

    );
};

export default AssignPlacePage;
