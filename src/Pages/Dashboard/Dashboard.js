import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;