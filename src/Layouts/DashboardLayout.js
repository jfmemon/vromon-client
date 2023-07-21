import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        <li><Link to="/dashboard/hotelBookings">Booked Hotels</Link></li>
                        <li><Link to="/dashboard/users">Users</Link></li>
                        <li><Link to="/dashboard/queries">Query Info</Link></li>
                        <li><Link to="/dashboard/busTicketBookings">Booked Bus Tickets</Link></li>
                        <li><Link to="/dashboard/flightBookings">Booked Flight Tickets</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;