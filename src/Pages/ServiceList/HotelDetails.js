import React from 'react';
import { useNavigate } from 'react-router-dom';

const HotelDetails = ({ service }) => {
    const { id, img, title, details, price } = service;
    const navigate = useNavigate();

    const handleBookNow = () => {
        navigate(`/hotelDetailsCheckout/${id}`, {state: {hotelDetails: service}})
    }

    return (

        <div className="flex flex-col p-5 my-4 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ms-auto me-auto">
            <img className="rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={img} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>
                <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">{price} tk (Per night)</p>
                <button onClick={handleBookNow} className='btn btn-outline btn-warning w-28'>Book Now</button>
            </div>
        </div>

    );
};

export default HotelDetails;


// <div className="h-60 card card-side bg-base-100 shadow-xl m-5 p-8 grid sm:grid-cols-1 lg:grid-cols-2" >
        //     <div className="lg:w-2/5 ">
        //         <img className='p-2' src={img} alt="" />
        //     </div>
        //     <div className="card-body lg:w-4/5 p-0">
        //         <h2 className="card-title">{title}</h2>
        //         <p>{details}</p>
        //         <h3 className='text-1xl font-semibold'>Price: {price} tk <span>(Per night)</span></h3>
        //         <button className="btn btn-outline btn-warning">Book Now</button>
        //     </div>
        // </div>