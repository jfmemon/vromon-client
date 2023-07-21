import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ContactsInfo = () => {
    const url = `https://vromon-server-roan.vercel.app/contacts`;
    const {data: contactsInfo = []} = useQuery({
        queryKey: ['contacts'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className='text-2xl text-warning font-semibold p-5'>Users query</h3>
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