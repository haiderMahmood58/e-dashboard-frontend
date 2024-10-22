import React, { useState } from 'react';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const collectData = () => {
        console.log(name, email, password)
    }

    return(
        <div className='register'>
            <h1>Register</h1>
            <input
                className='input-box'
                type='text'
                placeholder='Enter Name'
                value={name}
                onChange={ (e) => setName(e.target.value) }
            />

            <input
                className='input-box'
                type='text'
                placeholder='Enter Email'
                value={email}
                onChange={ (e) => setEmail(e.target.value) }
            />

            <input
                className='input-box'
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={ (e) => setPassword(e.target.value) }
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
