import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import HotelLists from './HotelLists';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Hotels = () => {
    const { hotels } = useLoaderData();
    const { setHotelDetails } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleBookNowClick = (hotel) => {
        setHotelDetails(hotel);
        navigate(`/checkout/${hotel.id}`);
    };

    return (
        <div>
            {
                hotels.map(hotel => <HotelLists
                    key={hotel.id}
                    hotel={hotel}
                    onBookNowClick={() => handleBookNowClick(hotel)}
                ></HotelLists>)
            }
        </div>
    );
};

export default Hotels;