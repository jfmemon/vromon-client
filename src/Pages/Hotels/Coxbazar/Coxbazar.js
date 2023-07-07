import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoxbazarDetails from './CoxbazarDetails';

const Coxbazar = () => {
    const coxbazarHotels = useLoaderData();
    return (
        <div className='m-5'>
            {
                coxbazarHotels.map(hotel => <CoxbazarDetails
                key={hotel._id}
                hotel={hotel}
                ></CoxbazarDetails>)
            }
        </div>
    );
};

export default Coxbazar;