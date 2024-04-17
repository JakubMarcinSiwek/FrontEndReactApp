import React, { useState } from 'react';
import data from '../config.json'
const DeleteBeeForm = (props) => {
    const [beeId, setBeeId] = useState('');
    const [message, setMessage] = useState('');
    const [validationError, setValidationError] = useState('');
    const {token, role}=props;

    const handleInputChange = (event) => {
        setBeeId(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${data.api}/Bee/api/deleteBee/${beeId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                setMessage('Bee deleted successfully');
                setValidationError('');
            } else {
                const data = await response.json();
                if (response.status === 400) {
                    setValidationError(data.message);
                } else {
                    setMessage(`Error deleting bee: ${data}`);
                }
            }
        } catch (error) {
            setMessage(`Error deleting bee: ${error.message}`);
        }
    };

    return (<div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2 style={{ color: 'black' }}>Delete Bee</h2>
            <form onSubmit={handleSubmit}>
                <label style={{ display: 'block', margin: '10px 0', color: 'black' }}>
                    Bee ID:
                    <input
                        type="text"
                        value={beeId}
                        onChange={handleInputChange}
                        style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    {validationError && (
                        <p style={{ color: 'red', margin: '5px 0 0 10px' }}>{validationError}</p>
                    )}
                </label>
                <button
                    type="submit"
                    style={{ backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Delete Bee
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>


    );
};

export default DeleteBeeForm;
