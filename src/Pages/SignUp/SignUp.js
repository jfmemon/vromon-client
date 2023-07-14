import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const { signup, emailVerify } = useContext(AuthContext);
    const [user, setUser] = useState([]);
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        signup(name, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Signup successful.');
                // alert('Registration completed.');
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
                    alert("Registration successful.")
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
                    <form onSubmit={handleSignUp} className="card-body w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onBlur={handleInput} name='name' type="text" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleInput} name='email' type="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onBlur={handleInput} name='password' type="password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-warning" type="submit" value="Sign Up" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;