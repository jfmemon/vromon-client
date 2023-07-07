import React from 'react';

const HotelLists = ({ hotel }) => {
    const { id, img, title, details, price } = hotel;
    return (
        <div className="h-60 card card-side bg-base-100 shadow-xl m-5 p-5" >
            <img className='p-2' src={img} alt="" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <h3 className='text-1xl font-semibold'>Price: {price} tk <span>(Per night)</span></h3>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-warning">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default HotelLists;