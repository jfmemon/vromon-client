import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Users = () => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState({});
    console.log(users)
    // const userEmail = user.email;
    // const url = `https://vromon-server-roan.vercel.app/users/${user?.email}`;

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setUsers(data)
            })
    }, [])


    return (
        <div>
            <h3 className='text-2xl text-warning font-semibold p-5'>Your Information</h3>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr className="hover">
                                <th></th>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                            </tr>
                        }
                    </tbody>
                    {/* <tbody>
                        {
                            users.map((user, i) =>
                                <tr className="hover">
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        }
                    </tbody> */}
                </table>
            </div>
        </div>
    );
};

export default Users;