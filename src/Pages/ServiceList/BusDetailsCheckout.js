import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const BusDetailsCheckout = () => {
    const { user, busServiceDetails } = useContext(AuthContext);
    const { id, name, img, from, to, depurtureTime, arrivalTime, price } = busServiceDetails;
    const [busPrice, setBusPrice] = useState(0);
    const [busTicketBookings, setBusTicketBookings] = useState([]);


    const handleBusTicketBookings = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const phone = form.phone.value;
        const departure = form.departure.value;
        const arrival = form.arrival.value;
        const person = form.person.value;
        const busName = form.busName.value;
        const busType = form.busType.value;
        const from = form.from.value;
        const to = form.to.value;


        const order = {
            busId: id,
            customerName: name,
            email: email,
            phone: phone,
            from: from,
            to: to,
            departure: departure,
            arrival: arrival,
            person: person,
            busName: busName,
            busType: busType,
            price: busPrice,
        };


        fetch('https://vromon-server-roan.vercel.app/busTicketBookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Ticket booked successfully.');
                    form.reset();
                }
            })
            .catch(err => console.error(err))

    }

    const handleInput = event => {
        event.preventDefault();
        const fieldName = event.target.name;
        const value = event.target.value;
        const newBusTicketBookings = { user, ...busTicketBookings }; // Create a copy of hotelBookings object
        newBusTicketBookings[fieldName] = value;
        setBusTicketBookings(newBusTicketBookings);
    };

    const handleBus = event => {
        event.preventDefault();
        const personQuantityString = document.getElementById('personQuantity').value;
        const personQuantityInt = parseInt(personQuantityString);
        let busTicketPrice = price;
        const value = event.target.value;
        if (value === "CB") {
            setBusPrice(0);
        }
        if (value === "SL") {
            busTicketPrice = (price + 1300) * personQuantityInt;
            setBusPrice(busTicketPrice);
        }
        if (value === "AC") {
            busTicketPrice = busTicketPrice * personQuantityInt;
            setBusPrice(busTicketPrice);
        }
        if (value === "NAC") {
            busTicketPrice = (price - 400) * personQuantityInt;
            setBusPrice(busTicketPrice);
        }
    }

    return (
        <div>
            <h3 className='text-3xl font-semibold text-center my-5'>-Confirmation Page-</h3>
            <div className='lg:w-1/3 ms-auto me-auto'>
                <img src={img} alt="" />
            </div>
            <form onSubmit={handleBusTicketBookings} className="card-body">
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
                        <div className="form-control lg:w-2/3 sm:w-full">
                            <label className="label">
                                <span className="label-text">From</span>
                            </label>
                            <input onBlur={handleInput} name='from' type="text" defaultValue={from} readOnly className="input input-bordered w-3/4" required />
                        </div>
                        <div className="form-control lg:w-2/3 sm:w-full">
                            <label className="label">
                                <span className="label-text">To</span>
                            </label>
                            <input onBlur={handleInput} name='to' type="text" defaultValue={to} readOnly className="input input-bordered w-3/4" required />
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className="form-control lg:w-2/3 sm:w-full">
                            <label className="label">
                                <span className="label-text">Departure time</span>
                            </label>
                            <input onBlur={handleInput} name='departure' type="time" defaultValue={depurtureTime} readOnly className="input input-bordered w-3/4" required />
                        </div>
                        <div className="form-control lg:w-2/3 sm:w-full">
                            <label className="label">
                                <span className="label-text">Arrival time</span>
                            </label>
                            <input onBlur={handleInput} name='arrival' type="time" defaultValue={arrivalTime} readOnly className="input input-bordered w-3/4" required />
                        </div>
                        <div className="form-control lg:w-2/3 sm:w-full">
                            <label className="label">
                                <span className="label-text">Person</span>
                            </label>
                            <input id='personQuantity' onBlur={handleInput} name='person' type="number" defaultValue={0} className="input input-bordered w-3/4" required />
                        </div>
                        <div className="form-control lg:w-2/3 sm:w-full">
                            <label className="label">
                                <span className="label-text">Bus name</span>
                            </label>
                            <input onBlur={handleInput} name='busName' defaultValue={name} readOnly type="option" className="input input-bordered w-3/4" />
                        </div>
                        <div className="form-control lg:w-2/3 sm:w-full">
                            <label htmlFor="hotelDetails" className="label">
                                <span className="label-text">Bus type</span>
                            </label>
                            <select
                                id="hotelDetails"
                                name="busType" // Updated name attribute
                                onChange={handleBus} // Added onChange event
                                defaultValue="CR"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            >
                                <option value="CB">Choose a bus</option>
                                <option value="SL">Sleeper</option>
                                <option value="AC">AC</option>
                                <option value="NAC">Non AC</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='my-5 flex justify-center items-center'>
                    <h3 className='text-xl'>Total price: <span className='2xl font-semibold text-warning'>{busPrice}</span> tk</h3>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-warning w-1/4 ml-auto mr-auto">Book Now</button>
                </div>
            </form>

        </div>
    );
};

export default BusDetailsCheckout;