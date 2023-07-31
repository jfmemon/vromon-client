import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Users = () => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState(null);
    // console.log(users)

    useEffect(() => {
        fetch(`https://vromon-server-roan.vercel.app/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [user.email])

    if (users === null) {
        return (
            <div>
                <progress className='progress w-56'></progress>
            </div>
        )
    }


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
                        <tr className="hover">
                            <th></th>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;