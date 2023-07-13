import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const Login = () => {
    const { login, user } = useContext(AuthContext);

    // const location = useLocation();
    // const navigate = useNavigate();
    // const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const userCheck = result.user;
                console.log(userCheck);
                form.reset();
            })

            .catch(err => {
                console.error(err);
            })

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
                            <input name='email' type="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" className="input input-bordered" />
                            <label className="label">
                                <Link to="" className="label-text-alt link link-hover">Forgot password?</Link>
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