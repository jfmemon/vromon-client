import React from 'react';

const HotelDetails = ({service}) => {
    const {id, img, title, details, price} = service;
    return (
        <div>
            <h3>{title}</h3>
        </div>
    );
};

export default HotelDetails;