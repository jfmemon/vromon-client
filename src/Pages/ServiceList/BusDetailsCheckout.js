import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const BusDetailsCheckout = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const busDetails = location.state?.busDetails;
    const { id, name, img, from, to, depurtureTime, arrivalTime, price } = busDetails;

    return (
        <div>
            <h3>Bus details checkout page. {name}</h3>
        </div>
    );
};

export default BusDetailsCheckout;