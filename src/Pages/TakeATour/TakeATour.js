import React from 'react';

const TakeATour = () => {

    const handleTourPackage = event => {

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
                            <input name='name' type="text" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input name='phone' type="number" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Destination</span>
                            </label>
                            <input name='from' type="text" className="input input-bordered w-3/4" placeholder='From' /><br />
                            <input name='to' type="text" className="input input-bordered w-3/4" placeholder='To' />
                        </div>
                    </div>
                    <div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input name='date' type="date" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Person</span>
                            </label>
                            <input name='person' type="number" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Hotel</span>
                            </label>
                            <input name='hotel' type="option" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Room type</span>
                            </label>
                            <input name='room' type='option' className="input input-bordered w-3/4" />
                        </div>
                        <div>
                            <h3>Total price: </h3>
                        </div>
                    </div>
                </div>
            </form>
            <div className="form-control mt-6">
                <button className="btn btn-warning w-1/4 ml-auto mr-auto">Book Now</button>
            </div>
        </div>
    );
};

export default TakeATour;