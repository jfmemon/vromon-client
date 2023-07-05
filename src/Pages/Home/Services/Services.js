import React, { useState } from 'react';
import ServiceList from './ServiceList';

const Services = () => {
    const [services, setServices] = useState([]);

    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => {
        setServices(data);
    })

    return (
        <div className='my-20'>
            <h3 className='text-5xl font-bold text-center pb-5'>Our services</h3>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5 p-5'>
                {
                    services.map(service => <ServiceList
                    key={service._id}
                    service={service}
                    ></ServiceList>)
                }
            </div>
        </div>
    );
};

export default Services;