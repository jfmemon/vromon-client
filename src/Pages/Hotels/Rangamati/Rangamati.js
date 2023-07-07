import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RangamatiDetails from './RangamatiDetails';

const Rangamati = () => {
    const rangamatiHotels = useLoaderData();
    return (
        <div className='m-5'>
            {
                rangamatiHotels.map(hotels => <RangamatiDetails
                key={hotels._id}
                hotels={hotels}
                ></RangamatiDetails>)
            }
        </div>
    );
};

export default Rangamati;