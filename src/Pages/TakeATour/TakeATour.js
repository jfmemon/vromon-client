import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const TakeATour = () => {
    const { user } = useContext(AuthContext);
    const [tours, setTours] = useState([])

    const handleTourPackage = event => {
        event.preventDefault();

        fetch("https://vromon-server-roan.vercel.app/tours", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tours)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Information added successfully.")
                    event.target.reset();
                }
            })
    }

    const handleInput = event => {
        event.preventDefault();
        const fieldName = event.target.name;
        const value = event.target.value;
        const newTours = { user, ...tours };  // ager user gulo'o newUser a add kora 
        newTours[fieldName] = value;  // newUser er value ta hobe oi event.target.value(fieldName er value)
        setTours(newTours);  // setUser er value hobe newUser er value;
    }

    return (
        <div className='my-10'>
            <form onSubmit={handleTourPackage} className="card-body">
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5'>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onBlur={handleInput} name='name' type="text" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleInput} name='email' type="email" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input onBlur={handleInput} name='phone' type="number" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Destination</span>
                            </label>
                            <input onBlur={handleInput} name='from' type="text" className="input input-bordered w-3/4" placeholder='From' /><br />
                            <input onBlur={handleInput} name='to' type="text" className="input input-bordered w-3/4" placeholder='To' />
                        </div>
                    </div>
                    <div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input onBlur={handleInput} name='date' type="date" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Person</span>
                            </label>
                            <input onBlur={handleInput} name='person' type="number" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Hotel name</span>
                            </label>
                            <input onBlur={handleInput} name='hotel' type="option" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Room type</span>
                            </label>
                            <input onBlur={handleInput} name='room' type='option' className="input input-bordered w-3/4" />
                        </div>
                        <div>
                            <h3>Total price: </h3>
                        </div>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-warning w-1/4 ml-auto mr-auto">Book Now</button>
                </div>
            </form>
        </div>
    );
};

export default TakeATour;