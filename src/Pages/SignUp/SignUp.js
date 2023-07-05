import React from 'react';

const SignUp = () => {
    const handleSignUp = (event) => {
        event.preventDefault();
    }
    return (
        <div className="hero bg-base-200 w-full">
            <div className="hero-content">
                <div className="card shadow-2xl bg-base-100 my-5">
                    <form onSubmit={handleSignUp} className="card-body w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;