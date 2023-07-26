import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const ContactsInfo = () => {
    const {user} = useContext(AuthContext);
    const url = `https://vromon-server-roan.vercel.app/contacts/?email=${user.email}`;
    const {data: contactsInfo = []} = useQuery({
        queryKey: ['contacts', user.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className='text-2xl text-warning font-semibold p-5'>Your queries</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contactsInfo.map((cInfo, i) =>
                                <tr className="hover">
                                    <th>{i + 1}</th>
                                    <td>{cInfo.email}</td>
                                    <td>{cInfo.subject}</td>
                                    <td>{cInfo.message}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactsInfo;