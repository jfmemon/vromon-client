import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    });


    // const { data: users = [], refetch } = useQuery(['users'], async () => {
    //     const res = await fetch("https://vromon-server-roan.vercel.app/users");
    //     return res.json();
    // })
    

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: `${user.name} is an admin now.`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = (user) => {

    }

    if (!Array.isArray(users)) {
        return (
            <div>
                <progress className='progress w-56'></progress>
            </div>
        );
    }

    return (
        <div className='text-center w-full'>
            <h3 className='text-3xl font-semibold my-5 text-warning'>Total users: {users.length}</h3>
            <div className='overflow-x-auto'>
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <tr className="hover" key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? 'admin' :
                                                <button className='btn btn-ghost text-orange-400' title='Make admin' onClick={() => handleMakeAdmin(user)}><FaUserShield></FaUserShield></button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(user)} title='Delete this user.' className='btn btn-ghost text-red-500'>
                                            <FaTrashAlt></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;