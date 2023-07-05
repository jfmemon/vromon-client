import React from 'react';

const ServiceList = ({service}) => {
    const {_id, img, title} = service;
    return (
        <div className="card w-25 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-semibold">{title}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-warning">Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;