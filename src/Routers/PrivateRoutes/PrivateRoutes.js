import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <h3 className='text-3xl'>Loading...</h3>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;