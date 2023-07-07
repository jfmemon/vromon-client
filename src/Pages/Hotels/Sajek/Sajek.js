import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SajekDetails from './SajekDetails';

const Sajek = () => {
    const sajekHotels = useLoaderData();
    return (
        <div>
            {
                sajekHotels.map(hotels => <SajekDetails
                key={hotels._id}
                hotels={hotels}
                ></SajekDetails>)
            }
        </div>
    );
};

export default Sajek;