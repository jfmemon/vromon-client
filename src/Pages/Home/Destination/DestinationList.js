import React from 'react';
import { Link } from 'react-router-dom';

const DestinationList = ({ destination }) => {
    const { _id, img, title, details } = destination;

    return (
        <div className="card w-50 bg-base-100 shadow-xl">
            <figure><img src={img} className="lg:h-64 hover:scale-125 transition duration-500 cursor-pointer" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <Link to={`/hotels/${_id}`}>
                        <button className="btn btn-outline btn-warning">Explore Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DestinationList;