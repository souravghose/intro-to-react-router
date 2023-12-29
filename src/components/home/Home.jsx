import React from 'react';
import Header from '../header/Header';
import { Outlet, useNavigation } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <div>{navigation.state === 'loading' && "Loading..."}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;