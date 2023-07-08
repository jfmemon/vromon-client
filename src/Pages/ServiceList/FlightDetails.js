import React from 'react';

const FlightDetails = ({service}) => {
    const {name} = service;
    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

export default FlightDetails;