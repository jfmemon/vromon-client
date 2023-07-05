import React, { useEffect, useState } from 'react';
import DestinationList from './DestinationList';

const Destination = () => {
    const [destinations, setDestinations] = useState([]);

    fetch('http://localhost:5000/destinations')
    .then(res => res.json())
    .then(data => {
        setDestinations(data);
    })

    return (
        <div className='mt-24'>
            <h3 className='text-5xl font-bold pb-5 text-center'>Popular Destinations</h3>
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-5 p-4'>
                {
                    destinations.map(destination => <DestinationList
                    key={destination._id}
                    destination={destination}
                    ></DestinationList>)
                }
            </div>
        </div>
    );
};

export default Destination;