import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const FlightBookings = () => {
    const {user} = useContext(AuthContext);
    const url = `https://vromon-server-roan.vercel.app/flightTicketBookings?email=${user.email}`;

    const { data: bookedFlightTickets = [] } = useQuery ({
        queryKey: ['flightTicketBookings', user.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className='text-2xl text-warning font-semibold p-5'>Flight Booking Information</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Departure</th>
                            <th>Arrival</th>
                            <th>Person</th>
                            <th>Flight name</th>
                            <th>Flight type</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookedFlightTickets.map((fTickets, i) =>
                                <tr className="hover">
                                    <th>{i + 1}</th>
                                    <td>{fTickets.customerName}</td>
                                    <td>{fTickets.email}</td>
                                    <td>{fTickets.phone}</td>
                                    <td>{fTickets.from}</td>
                                    <td>{fTickets.to}</td>
                                    <td>{fTickets.departure}</td>
                                    <td>{fTickets.arrival}</td>
                                    <td>{fTickets.person}</td>
                                    <td>{fTickets.flightName}</td>
                                    <td>{fTickets.flightType}</td>
                                    <td>{fTickets.price}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FlightBookings;