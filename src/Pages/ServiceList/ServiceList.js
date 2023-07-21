import React, { useState, useEffect, useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import HotelDetails from './HotelDetails';
import FlightDetails from './FlightDetails';
import BusDetails from './BusDetails';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const ServiceList = () => {
    const serviceList = useLoaderData();
    const [services, setServices] = useState([]);
    const { setHotelServiceDetails, setFlightServiceDetails, setBusServiceDetails } = useContext(AuthContext);
    const navigate = useNavigate();


    const hotelsId = "64a94a4c6b2df0def9f64cc5";
    const flightsId = "64a94a4c6b2df0def9f64cc6";
    const busesId = "64a94a4c6b2df0def9f64cc7";

    useEffect(() => {
        if (serviceList._id === hotelsId) {
            setServices(serviceList.hotels || []);
        } else if (serviceList._id === flightsId) {
            setServices(serviceList.flights || []);
        } else if (serviceList._id === busesId) {
            setServices(serviceList.bus || []);
        }
    }, [serviceList, hotelsId, flightsId, busesId]);


    const handleHotelBookNowClick = (service) => {
        setHotelServiceDetails(service);
        navigate(`/hotelDetailsCheckout/${service.id}`);
    }

    const handleBusBookNowClick = (service) => {
        setBusServiceDetails(service);
        navigate(`/busDetailsCheckout/${service.id}`)
    }

    const handleFlightBookNowClick = (service) => {
        setFlightServiceDetails(service);
        navigate(`/flightDetailsCheckout/${service.id}`)
    }

    return (
        <div className='m-5'>
            {serviceList?._id === hotelsId ? (
                services.map(service => (
                    <HotelDetails key={service.id} service={service} hotelBookNowClick={() => handleHotelBookNowClick(service)}></HotelDetails>
                ))
            ) : serviceList?._id === flightsId ? (
                services.map(service => (
                    <FlightDetails key={service.id} service={service} flightBookNowClick={() => handleFlightBookNowClick(service)}></FlightDetails>
                ))
            ) : serviceList?._id === busesId ? (
                services.map(service => (
                    <BusDetails key={service.id} service={service} busBookNowClick={() => handleBusBookNowClick(service)}></BusDetails>
                ))
            ) : (
                <p>No services found.</p>
            )}
        </div>
    );
};

export default ServiceList;