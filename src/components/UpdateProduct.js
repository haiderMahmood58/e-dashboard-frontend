import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, []);

    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();

        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const updateProduct = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: 'put',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-type': 'application/json'
            }
        });
        navigate('/');
    }

    return (
        <div className='product'>
            <h1>Update Product</h1>
            <input
                className='input-box'
                type='text'
                placeholder='Enter Product Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                className='input-box'
                type='text'
                placeholder='Enter Product Price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <input
                className='input-box'
                type='text'
                placeholder='Enter Product Category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />

            <input
                className='input-box'
                type='text'
                placeholder='Enter Product Company'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />

            <button
                className='app-button'
                type='button'
                onClick={updateProduct}
            >
                Update Product
            </button>
        </div>
    );
}

export default UpdateProduct;
