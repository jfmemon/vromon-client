import React from 'react';

const TourBook = () => {
    return (
        <div className='my-10'>
            <form className="card-body">
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5'>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" className="input input-bordered w-3/4" />
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Destination</span>
                            </label>
                            <input type="text" className="input input-bordered w-3/4" placeholder='From' /><br />
                            <input type="text" className="input input-bordered w-3/4" placeholder='To' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Person</span>
                            </label>
                            <input type="number" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Hotel</span>
                            </label>
                            <input type="option" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Room type</span>
                            </label>
                            <input type='option' className="input input-bordered w-3/4" />
                        </div>
                    </div>
                </div>
            </form>
            <div className="form-control mt-6">
                <button className="btn btn-warning w-1/4">Login</button>
            </div>
        </div>
    );
};

export default TourBook;