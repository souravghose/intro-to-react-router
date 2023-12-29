import React from 'react';
import { Link, Outlet, useNavigation } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
const Header = () => {
    return (
        <div>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/friends">Friends</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
        
        </div>
    );
};

export default Header;