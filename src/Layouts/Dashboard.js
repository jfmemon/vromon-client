import Header from '../Pages/Shared/Header/Header';
import { Link, Outlet } from 'react-router-dom';
import { FaBus, FaHome, FaHotel, FaMailBulk, FaPlane, FaUser, FaUsers } from 'react-icons/fa';
import useAdmin from '../Hooks/useAdmin';


const Dashboard = () => {

    const { isAdmin, isAdminLoading, isAdminError } = useAdmin();

    if (isAdminError) {
        // Handle the error, show a message, or redirect to an error page.
        return <div>Error: {isAdminError.message}</div>;
    }

    // Render loading state if needed
    if (isAdminLoading) {
        return <progress className='progress w-56'></progress>;
    }

    // const isAdmin = true;


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
                        {isAdmin ? (
                            <>
                                <li><Link to="/dashboard/adminHome"><FaHome /> Admin Home</Link></li>
                                <li><Link to="/dashboard/allUsers"><FaUsers /> Manage Users</Link></li>
                                <li><Link to="/dashboard/manageHotelBookings"><FaHotel></FaHotel> Manage Hotels</Link></li>
                                <li><Link to="/dashboard/manageQueries"><FaMailBulk></FaMailBulk> Manage Query Info</Link></li>
                                <li><Link to="/dashboard/manageBusTicketBookings"><FaBus></FaBus> Manage Bus Tickets</Link></li>
                                <li><Link to="/dashboard/manageFlightBookings"><FaPlane></FaPlane> Manage Flight Tickets</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/dashboard/userHome"><FaHome />User Home</Link></li>
                                <li><Link to="/dashboard/hotelBookings"><FaHotel /> Booked Hotels</Link></li>
                                <li><Link to="/dashboard/users"><FaUser></FaUser> My Info</Link></li>
                                <li><Link to="/dashboard/queries"><FaMailBulk></FaMailBulk> Query Info</Link></li>
                                <li><Link to="/dashboard/busTicketBookings"><FaBus></FaBus> Booked Bus Tickets</Link></li>
                                <li><Link to="/dashboard/flightBookings"><FaPlane></FaPlane> Booked Flight Tickets</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;