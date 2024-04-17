import React, { useState } from 'react';
import data from '../config.json'

const Login = (props) => {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const {setRole,setToken} = props;

    const handleUsernameChange = (e) => {
        setNickname(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const handleLogin = async () => {
        try {
            const response = await fetch(`${data.api}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nickname, password }),
            });

            if (response.ok) {
                const data = await response.json();
                const jwtToken = data.token;
                const userRole = data.role;
                //console.log(jwtToken+' '+userRole);
                console.log('login : '+userRole)

                setToken(jwtToken);
                setRole(userRole);

            } else {
                console.error('Login failed:', response.statusText);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };



    return (
        <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid #8B4513', borderRadius: '8px', backgroundColor: '#FFF8DC' }}>
            <h2 style={{ color: '#8B4513' }}>Nickname</h2>
            <label style={{ display: 'block', margin: '10px 0', color: '#8B4513' }}>
                Nickname:
                <input
                    type="text"
                    value={nickname}
                    onChange={handleUsernameChange}
                    style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #8B4513' }}
                />
            </label>
            <br />
            <label style={{ display: 'block', margin: '10px 0', color: '#8B4513' }}>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #8B4513' }}
                />
            </label>
            <br />
            <button
                onClick={handleLogin}
                style={{ backgroundColor: '#8B4513', color: 'white', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}
            >
                Log In
            </button>
        </div>

    );
};

export default Login;
