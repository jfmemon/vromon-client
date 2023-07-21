import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Dashboard from './../../Dashboard/Dashboard';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then()
            .catch(err => console.error(err))
    }

    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/takeATour'>Take a tour</Link></li>
        <li className='font-semibold'><Link to='/aboutUs'>About Us</Link></li>
        <li className='font-semibold'><Link to='/contactUs'>Contact Us</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 h-12 mb-8 mt-2 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <h3 className='text-2xl text-yellow-500'>Vromon</h3>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user?.email ?
                        <>
                            <button className="btn btn-outline btn-warning mr-2" >
                                <Link to="/dashboard">Dashboard</Link>
                            </button>
                            <button onClick={handleLogout} className="btn btn-warning">Log Out</button>
                        </>
                        :
                        <>
                            <Link to="/login">
                                <button className="btn btn-outline btn-warning mr-2">Log In</button>
                            </Link>
                            <Link to="/signup">
                                <button className="btn btn-warning">Sign Up</button>
                            </Link>
                        </>

                }
            </div>

            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Header;