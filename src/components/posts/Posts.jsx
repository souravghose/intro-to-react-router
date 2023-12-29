import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../post/Post';


const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            Every post will show here!
            {
               posts.map(post => <Post key={posts.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;