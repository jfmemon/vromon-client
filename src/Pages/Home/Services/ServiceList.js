import React from 'react';
import { Link } from 'react-router-dom';

const ServiceList = ({ service }) => {
    const { _id, img, title } = service;
    return (
        <div className="card w-25 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-semibold">{title}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/hotelCollection/${_id}`}>
                        <button className="btn btn-outline btn-warning">Explore Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;