import React from 'react';

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();

    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content">
                <div className="card shadow-2xl bg-base-100 my-10">
                    <form onSubmit={handleLogin} className="card-body w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
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

export default Login;