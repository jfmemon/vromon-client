import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Services from './../Home/Services/Services';
import HotelDetails from './HotelDetails';
import FlightDetails from './FlightDetails';
import BusDetails from './BusDetails';

const ServiceList = () => {
    const serviceList = useLoaderData();
    const [services, setServices] = useState([]);

    const hotelsId = "64a94a4c6b2df0def9f64cc5";
    const flightsId = "64a94a4c6b2df0def9f64cc6";
    const busesId = "64a94a4c6b2df0def9f64cc7";

    useEffect(() => {
        if (serviceList._id === hotelsId) {
            setServices(serviceList.hotels);
        } else if (serviceList._id === flightsId) {
            setServices(serviceList.flights);
        } else if (serviceList._id === busesId) {
            setServices(serviceList.bus);
        }
    }, [serviceList, hotelsId, flightsId, busesId]);

    return (
        <div>
            {serviceList?._id === hotelsId ? (
                services.map(service => (
                    <HotelDetails key={service.id} service={service}></HotelDetails>
                ))
            ) : serviceList?._id === flightsId ? (
                services.map(service => (
                    <FlightDetails key={service.id} service={service}></FlightDetails>
                ))
            ) : (
                services.map(service => (
                    <BusDetails key={service.id} service={service}></BusDetails>
                ))
            )}
        </div>
    );
};

export default ServiceList;


























// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import Services from './../Home/Services/Services';
// import HotelDetails from './HotelDetails';
// import FlightDetails from './FlightDetails';
// import BusDetails from './BusDetails';

// const ServiceList = () => {
//     const serviceList = useLoaderData();
//     const [services, setServices] = useState([]);

//     const hotelsId = "64a94a4c6b2df0def9f64cc5";
//     const flightsId = "64a94a4c6b2df0def9f64cc6";
//     const busesId = "64a94a4c6b2df0def9f64cc7";


//     if (serviceList._id === hotelsId) {
//         setServices(serviceList.hotels);
//     }
//     if (serviceList._id === flightsId) {
//         setServices(serviceList.flights);
//     }
//     if (serviceList._id === busesId) {
//         setServices(serviceList.bus);
//     }

//     return (
//         <div>
//             {
//                 serviceList?._id === hotelsId ?

//                     services.map(service => <HotelDetails
//                         key={service.id}
//                         service={service}
//                     ></HotelDetails>)

//                     :
//                     serviceList?._id === flightsId ?
//                         services.map(service => <FlightDetails
//                             key={service.id}
//                             service={service}
//                         ></FlightDetails>)
//                         :
//                         services.map(service => <BusDetails
//                             key={service.id}
//                             service={service}
//                         ></BusDetails>)
//             }
//         </div>
//     );
// };

// export default ServiceList;