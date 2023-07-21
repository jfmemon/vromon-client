import { useQuery } from '@tanstack/react-query';
import React from 'react';

const BusTicketBookings = () => {
    const url = `https://vromon-server-roan.vercel.app/busTicketBookings`;
    const { data: bookedBusTickets = [] } = useQuery({
        queryKey: ['busTicketBookings'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className='text-2xl text-warning font-semibold p-5'>Bus Ticket Booking Information</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Departure</th>
                            <th>Arrival</th>
                            <th>Person</th>
                            <th>Bus name</th>
                            <th>Bus type</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookedBusTickets.map((bBusTickets, i) =>
                                <tr className="hover">
                                    <th>{i + 1}</th>
                                    <td>{bBusTickets.customerName}</td>
                                    <td>{bBusTickets.email}</td>
                                    <td>{bBusTickets.phone}</td>
                                    <td>{bBusTickets.from}</td>
                                    <td>{bBusTickets.to}</td>
                                    <td>{bBusTickets.departure}</td>
                                    <td>{bBusTickets.arrival}</td>
                                    <td>{bBusTickets.person}</td>
                                    <td>{bBusTickets.busName}</td>
                                    <td>{bBusTickets.busType}</td>
                                    <td>{bBusTickets.price}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BusTicketBookings;