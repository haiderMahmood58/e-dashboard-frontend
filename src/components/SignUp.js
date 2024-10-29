import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user')) navigate('/')
    }, [])

    const collectData = async () => {
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        localStorage.setItem('user', JSON.stringify(result.result));
        localStorage.setItem('token', JSON.stringify(result.auth));
        if (result) navigate('/')
    }

    return (
        <div className='register'>
            <h1>Register</h1>
            <input
                className='input-box'
                type='text'
                placeholder='Enter Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

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
                onClick={collectData}
            >
                Sign Up
            </button>
        </div>
    );
}

export default SignUp;
