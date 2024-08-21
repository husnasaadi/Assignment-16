import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Update = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const navigate = useNavigate();
    const { id } = useParams(); // This should be placed at the top of the function

    useEffect(() => {
        axios.get('http://localhost:3000/user/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [id]);

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3000/user/' + id, data) // 'putt' was corrected to 'put'
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Update a User</h1>
                <form onSubmit={handleUpdate}>
                    <div className='mb-2'>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            className='form-control'
                            placeholder='Enter Name'
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            className='form-control'
                            placeholder='Enter Email'
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            className='form-control'
                            placeholder='Enter Phone'
                            value={data.phone}
                            onChange={(e) => setData({ ...data, phone: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <button className='btn btn-success'>Update</button>
                        <Link to={'/'} className='btn btn-primary ms-3'>Back</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
