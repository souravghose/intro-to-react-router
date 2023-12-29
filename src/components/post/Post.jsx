import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const navigate = useNavigate();
    const {id, title, body} = post;
    const buttonHandler = () =>{
        navigate(`/posts/${id}`);
    }
    return (
        <div className='post'>
            <h3>ID: {id}</h3>
            <p>{title}</p>
            <Link to={`/posts/${id}`}>Show Details</Link>
            <Link to={`/posts/${id}`}><button>Show detail posts</button></Link>
            <button onClick={buttonHandler}>Button Handler</button>
        </div>
    );
};

export default Post;