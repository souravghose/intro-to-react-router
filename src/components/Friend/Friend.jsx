import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';
const Friend = ({friend}) => {
    const {name, phone, email, id} = friend;
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/friend/${id}`}>show me link details</Link>
        </div>
    );
};

export default Friend;