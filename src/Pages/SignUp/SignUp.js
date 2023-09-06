import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { signup } = useContext(AuthContext);
    const [user, setUser] = useState([]);
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';
                                                

    // const verification = () => toast('Please check your email and verify your email.');

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        signup(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
            })
            .catch(err => console.error(err))


        fetch("https://vromon-server-roan.vercel.app/users", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Registration successful.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate(from);
                    event.target.reset();
                }
            })
    }

    const handleInput = event => {
        event.preventDefault();
        const fieldName = event.target.name;
        const value = event.target.value;
        const newUser = { ...user };  // ager user gulo'o newUser a add kora 
        newUser[fieldName] = value;  // newUser er value ta hobe oi event.target.value(fieldName er value)
        setUser(newUser);  // setUser er value hobe newUser er value;
    }

    return (
        <div className="hero bg-base-200 w-full">
            <div className="hero-content">
                <div className="card shadow-2xl bg-base-100 my-5">
                    <form onSubmit={handleSignUp} className="card-body lg:w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onBlur={handleInput} name='name' type="text" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleInput} name='email' type="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onBlur={handleInput} name='password' type="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-warning" type="submit" value="Sign Up" />

                        </div>
                        <div>
                            <p><small>Already have an account? <Link to="/login" className='text-warning'>Login</Link></small></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;