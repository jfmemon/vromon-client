import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BandarbanDetails from './BandarbanDetails';

const Bandarban = () => {
    const bandarbanHotels = useLoaderData();
    return (
        <div>
            {
                bandarbanHotels.map(hotels => <BandarbanDetails
                key={hotels._id}
                hotels={hotels}
                ></BandarbanDetails>)
            }
        </div>
    );
};

export default Bandarban;