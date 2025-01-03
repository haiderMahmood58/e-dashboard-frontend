import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }

    return (
        <div>
            <img
                className='app-logo'
                alt=''
                src='https://marketplace.canva.com/EAFvDRwEHHg/1/0/1600w/canva-colorful-abstract-online-shop-free-logo-cpI8ixEpis8.jpg'
            />
            {auth ?
                <ul className='nav-ul'>
                    <li><Link to='/'>Products</Link></li>
                    <li><Link to='/add'>Add Product</Link></li>
                    <li><Link to='/update'>Update Product</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link onClick={logout} to='/login'>Logout ({JSON.parse(auth).name})</Link></li>
                </ul>
                :
                <ul className='nav-ul nav-right'>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>SignUp</Link></li>
                </ul>
            }
        </div>
    );
}

export default Nav;
