import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Login = () => {
    const { login, user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

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
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Login successful.',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })

            .catch(err => {
                console.error(err);
            })

    }


    return (
        <div className="hero bg-base-200">
            <h3 className='text-3xl text-center'>Login</h3>
            <div className="hero-content">
                <div className="card shadow-2xl bg-base-100 my-10">
                    <form onSubmit={handleLogin} className="card-body lg:w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Login</button>
                        </div>
                        <div>
                            <p><small>New to vromon? <Link to="/signup" className='text-warning'>Sign Up</Link></small></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;