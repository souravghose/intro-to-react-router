import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostsDetails = () => {
    const navigate = useNavigate();
    const showDetails = useLoaderData();
    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <p>{showDetails.id}</p>
            <p>{showDetails.body}</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default PostsDetails;