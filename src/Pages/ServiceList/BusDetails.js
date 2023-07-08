import React from 'react';

const BusDetails = ({service}) => {
    const { id, name, img, from, to, depurtureTime, arrivalTime, price } = service;
    console.log(name)
    return (
        <div className="flex flex-col p-5 my-4 bg-white border border-gray-200 rounded-lg md:max-w-xl shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ms-auto me-auto">
            <img className="rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={img} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">From: {from}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">To: {to}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Departure time: {depurtureTime}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Arrival time: {arrivalTime}</p>
                <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">{price} tk</p>
                <button className='btn btn-outline btn-warning w-28'>Book Now</button>
            </div>
        </div>
    );
};

export default BusDetails;