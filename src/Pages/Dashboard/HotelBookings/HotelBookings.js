import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const HotelBookings = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/hotelBookings?email=${user?.email}`;

    const { data: hotelBookings = [] } = useQuery({
        queryKey: ['hotelBookings', user.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className='text-2xl text-warning font-semibold p-5'>Hotels Booking Information</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Hotel Name</th>
                            <th>Check In</th>
                            <th>Check Out</th>
                            <th>Person</th>
                            <th>Room Type</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            hotelBookings.map((bookings, i) =>
                                <tr className="hover">
                                    <th>{i+1}</th>
                                    <td>{bookings.customerName}</td>
                                    <td>{bookings.email}</td>
                                    <td>{bookings.phone}</td>
                                    <td>{bookings.hotelName}</td>
                                    <td>{bookings.checkIn}</td>
                                    <td>{bookings.checkOut}</td>
                                    <td>{bookings.person}</td>
                                    <td>{bookings.roomType}</td>
                                    <td>{bookings.price}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HotelBookings;