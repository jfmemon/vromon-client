import React from 'react';

const HotelLists = ({ hotel, onBookNowClick }) => {
    const { img, title, details, price } = hotel;

    return (
        <div className="flex flex-col p-5 my-4 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ms-auto me-auto">
            <img
                className="rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg hover:scale-110 transition duration-500 cursor-pointer"
                src={img}
                alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {details}
                </p>
                <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
                    Tk: {price} (Per night)
                </p>
                <button onClick={onBookNowClick} className="btn btn-outline btn-warning w-28">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default HotelLists;
