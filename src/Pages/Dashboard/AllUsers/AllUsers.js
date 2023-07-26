import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUser, FaUserShield, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch("https://vromon-server-roan.vercel.app/users");
        return res.json();
    })

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
                                <tr className="hover">
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? 'admin' :
                                                <button className='btn btn-ghost text-orange-400' onClick={() => handleMakeAdmin(user)}><FaUserShield></FaUserShield></button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(user)} className='btn btn-ghost text-red-500'>
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