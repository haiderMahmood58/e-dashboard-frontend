import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user')) navigate('/')
    }, [])

    const handleLogin = async () => {
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/');
        } else alert('Please enter correct details');
    }

    return (
        <div className='login'>
            <input
                className='input-box'
                type='text'
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                className='input-box'
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                className='app-button'
                type='button'
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
}

export default Login;
