import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h3>Everything about friend is here!</h3>
            <p>Name: {friend.name}</p>
            <p>Email: {friend.email}</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default FriendDetail;