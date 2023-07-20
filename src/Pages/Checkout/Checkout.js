import React, { useContext, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { user, hotelDetails } = useContext(AuthContext);
    const { id } = useParams();
    const [hotelBookings, setHotelBookings] = useState([]);
    const [hotelPrice, setHotelPrice] = useState(0);

    if (!hotelDetails) {
        return <div>Error: Hotel details not found.</div>;
    }

    const { img, title, price } = hotelDetails;

    const handleHotelBookings = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const phone = form.phone.value;
        const checkIn = form.checkIn.value;
        const checkOut = form.checkOut.value;
        const person = form.person.value;
        const roomType = form.roomType.value;


        const order = {
            hotelId: id,
            hotelName: title,
            customerName: name,
            email: email,
            phone: phone,
            checkIn: checkIn,
            checkOut: checkOut,
            person: person,
            roomType: roomType,
            price: hotelPrice,
        };


        fetch('https://vromon-server-roan.vercel.app/hotelBookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Hotel booked successfully.');
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }


    const handleInput = event => {
        event.preventDefault();
        const fieldName = event.target.name;
        const value = event.target.value;
        const newHotelBookings = { user, ...hotelBookings }; // Create a copy of hotelBookings object
        newHotelBookings[fieldName] = value;
        setHotelBookings(newHotelBookings);
    };


    const handleRoom = event => {
        event.preventDefault();
        let hotelPrice = price;
        const value = event.target.value;
        if (value === "SB") {
            setHotelPrice(hotelPrice);
        }
        if (value === "DB") {
            hotelPrice = price + 1000;
            setHotelPrice(hotelPrice);
        }
        if (value === "CR") {
            setHotelPrice(hotelPrice);
        }
    }


    return (
        <div>
            <h3 className='text-3xl font-semibold text-center my-5'>-Confirmation Page-</h3>
            <div className='lg:w-1/3 ms-auto me-auto'>
                <img src={img} alt="" />
            </div>
            <form onSubmit={handleHotelBookings} className="card-body">
                <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className="form-control lg:w-2/3 sm:w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onBlur={handleInput} name='name' type="text" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control lg:w-2/3 sm:w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleInput} defaultValue={user?.email} readOnly name='email' type="email" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control lg:w-2/3 sm:w-full">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input onBlur={handleInput} name='phone' type="number" className="input input-bordered w-3/4" required />
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className="form-control lg:w-2/3 sm:w-full">
                            <label className="label">
                                <span className="label-text">Check In</span>
                            </label>
                            <input onBlur={handleInput} name='checkIn' type="date" className="input input-bordered w-3/4" required />
                        </div>
                        <div className="form-control lg:w-2/3 sm:w-full">
                            <label className="label">
                                <span className="label-text">Check Out</span>
                            </label>
                            <input onBlur={handleInput} name='checkOut' type="date" className="input input-bordered w-3/4" required />
                        </div>
                        <div className="form-control lg:w-2/3 sm:w-full">
                            <label className="label">
                                <span className="label-text">Person</span>
                            </label>
                            <input onBlur={handleInput} name='person' type="number" className="input input-bordered w-3/4" required />
                        </div>
                        <div className="form-control lg:w-2/3 sm:w-full">
                            <label className="label">
                                <span className="label-text">Hotel name</span>
                            </label>
                            <input onBlur={handleInput} name='hotel' defaultValue={title} readOnly type="option" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control lg:w-2/3 sm:w-full">
                            <label htmlFor="hotelDetails" className="label">
                                <span className="label-text">Room type</span>
                            </label>
                            <select
                                id="hotelDetails"
                                name="roomType" // Updated name attribute
                                onChange={handleRoom} // Added onChange event
                                defaultValue="CR"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            >
                                <option value="CR">Choose a room</option>
                                <option value="SB">Single bed</option>
                                <option value="DB">Double bed</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='my-5 flex justify-center items-center'>
                    <h3 className='text-xl'>Total price: <span className='2xl font-semibold text-warning'>{hotelPrice}</span> tk</h3>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-warning w-1/4 ml-auto mr-auto">Book Now</button>
                </div>
            </form>

        </div>
    );
};

export default Checkout;