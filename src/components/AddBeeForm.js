import React, { useState } from 'react';
import data from '../config.json'

const AddBeeForm = (props) => {
    const [beeData, setBeeData] = useState({
        Id_Bee: '',
        Nickname: '',
        Password: '',
        Id_Role: '2'
    });
    const [message, setMessage] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const {token,role}=props;

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBeeData({ ...beeData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${data.api}/Bee/api/createBee`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(beeData),
            });

            if (response.ok) {
                setMessage('Bee added successfully');
                setValidationErrors({});
            } else {
                const data = await response.json();
                if (response.status === 400) {
                    setValidationErrors(data.errors);
                } else {
                    setMessage(`Error adding bee: ${data}`);
                }
            }
        } catch (error) {
            setMessage(`Bee with given ID already exists`);
        }
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2 style={{ color: 'black' }}>Add a New Bee</h2>
            <form onSubmit={handleSubmit}>
                <label style={{ display: 'block', margin: '10px 0', color: 'black' }}>
                    Bee ID:
                    <input
                        type="text"
                        name="Id_Bee"
                        value={beeData.Id_Bee}
                        onChange={handleInputChange}
                        style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </label>
                <br />
                <label style={{ display: 'block', margin: '10px 0', color: 'black' }}>
                    Nickname:
                    <input
                        type="text"
                        name="Nickname"
                        value={beeData.Nickname}
                        onChange={handleInputChange}
                        style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    {validationErrors.Nickname && (
                        <p style={{ color: 'red', margin: '5px 0 0 10px' }}>{validationErrors.Nickname}</p>
                    )}
                </label>
                <br />
                <label style={{ display: 'block', margin: '10px 0', color: 'black' }}>
                    Password:
                    <input
                        type="password"
                        name="Password"
                        value={beeData.Password}
                        onChange={handleInputChange}
                        style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    {validationErrors.Password && (
                        <p style={{ color: 'red', margin: '5px 0 0 10px' }}>{validationErrors.Password}</p>
                    )}
                </label>
                <br />
                <label style={{ display: 'block', margin: '10px 0', color: 'black' }}>
                    Role ID:
                    <input
                        type="text"
                        name="Id_Role"
                        value={beeData.Id_Role}
                        onChange={handleInputChange}
                        style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    {validationErrors.Id_Role && (
                        <p style={{ color: 'red', margin: '5px 0 0 10px' }}>{validationErrors.Id_Role}</p>
                    )}
                </label>
                <br />
                <button
                    type="submit"
                    style={{ backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Add Bee
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>

);
};

export default AddBeeForm;
