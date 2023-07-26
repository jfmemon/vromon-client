import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Link, Outlet } from 'react-router-dom';
import { FaBus, FaHome, FaHotel, FaMailBulk, FaPlane, FaUser, FaUsers } from 'react-icons/fa';

const DashboardLayout = () => {

    //TODO 
    const isAdmin = true;

    return (
        <div>
            <Header></Header>
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side z-10">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {
                            isAdmin ? <>
                                <li><Link to="/dashboard"> <FaHome></FaHome> Admin Home</Link></li>
                                <li><Link to="/dashboard/allusers"><FaUsers></FaUsers> Manage Users</Link></li>
                                <li><Link to="/dashboard/hotelBookings"><FaHotel></FaHotel> Manage Hotels</Link></li>
                                <li><Link to="/dashboard/queries"><FaMailBulk></FaMailBulk> Manage Query Info</Link></li>
                                <li><Link to="/dashboard/busTicketBookings"><FaBus></FaBus> Manage Bus Tickets</Link></li>
                                <li><Link to="/dashboard/flightBookings"><FaPlane></FaPlane> Manage Flight Tickets</Link></li>
                            </> : <>
                                <li><Link to="/dashboard"><FaHome></FaHome> Dashboard Home</Link></li>
                                <li><Link to="/dashboard/hotelBookings"><FaHotel></FaHotel> Booked Hotels</Link></li>
                                <li><Link to="/dashboard/users"><FaUser></FaUser> User</Link></li>
                                <li><Link to="/dashboard/queries"><FaMailBulk></FaMailBulk> Query Info</Link></li>
                                <li><Link to="/dashboard/busTicketBookings"><FaBus></FaBus> Booked Bus Tickets</Link></li>
                                <li><Link to="/dashboard/flightBookings"><FaPlane></FaPlane> Booked Flight Tickets</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;