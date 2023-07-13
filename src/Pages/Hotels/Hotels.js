import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelLists from './HotelLists';

const Hotels = () => {
    const hotelLists = useLoaderData();
    const { hotels } = hotelLists;
    // console.log(hotelLists);
    return (
        <div>
            {
                hotels.map(hotel => <HotelLists
                    key={hotel.id}
                    hotel={hotel}
                ></HotelLists>)
            }
        </div>
    );
};

export default Hotels;