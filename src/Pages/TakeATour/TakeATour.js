import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const TakeATour = () => {
    const { user } = useContext(AuthContext);
    const [tours, setTours] = useState([]);
    const [hotels, setHotels] = useState([]);
    const destinationsHotel = hotels.length > 0 ? hotels[0].hotels : [];
    const [selectedDestinationId, setSelectedDestinationId] = useState("");

    // console.log(destinationsHotel);

    // destinationsHotel.map(hotel => {
    //     return console.log(hotel.price)
    // })

    const url = `http://localhost:5000/destinations`;

    const { data: destinations = [] } = useQuery({
        queryKey: ["destinations"],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    useEffect(() => {
        const obtainHotels = async (id) => {
            const url = `http://localhost:5000/destinations/${id}`;
            try {
                const res = await fetch(url);
                const data = await res.json();
                console.log('Obtained hotels:', data);
                setHotels(Array.isArray(data) ? data : [data]);
            } catch (error) {
                console.error('Error fetching hotels:', error);
            }
        };

        if (selectedDestinationId) {
            console.log('Selected Destination ID:', selectedDestinationId);
            obtainHotels(selectedDestinationId);
        }
    }, [selectedDestinationId]);

    const handleTourPackage = event => {
        event.preventDefault();

        fetch("https://vromon-server-roan.vercel.app/tours", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tours)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Information added successfully.")
                    event.target.reset();
                }
            })
    }

    const handleInput = event => {
        event.preventDefault();
        const fieldName = event.target.name;
        const value = event.target.value;
        const newTours = { user, ...tours };  // ager user gulo'o newUser a add kora 
        newTours[fieldName] = value;  // newUser er value ta hobe oi event.target.value(fieldName er value)
        setTours(newTours);  // setUser er value hobe newUser er value;
    }

    return (
        <div className='my-10'>
            <form onSubmit={handleTourPackage} className="card-body">
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5'>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onBlur={handleInput} name='name' type="text" className="input input-bordered w-3/4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleInput} name='email' type="email" className="input input-bordered w-3/4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input onBlur={handleInput} name='phone' type="number" className="input input-bordered w-3/4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Destination</span>
                            </label>
                            <select
                                id=""
                                name=""
                                defaultValue="CD"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                onChange={(e) => setSelectedDestinationId(e.target.value)} // Update selectedDestinationId when a destination is selected
                            >
                                <option value="CD">Choose a destination</option>
                                {destinations.map(destination =>
                                    <option value={destination._id} key={destination._id}>
                                        {destination.title}
                                    </option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Check In</span>
                            </label>
                            <input onBlur={handleInput} name='date' type="date" className="input input-bordered w-3/4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Check Out</span>
                            </label>
                            <input onBlur={handleInput} name='date' type="date" className="input input-bordered w-3/4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Person</span>
                            </label>
                            <input onBlur={handleInput} name='person' type="number" className="input input-bordered w-3/4" defaultValue={0} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Hotel name</span>
                            </label>
                            <select
                                name="hotel"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            >
                                <option value="CH">Choose a hotel</option>
                                {
                                    destinationsHotel.map(hotel =>
                                        <option value={hotel.id} key={hotel.id}>
                                            {hotel.title}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Room type</span>
                            </label>
                            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="CR">Choose a room</option>
                                <option value="SL">Single</option>
                                <option value="DL">Double</option>
                            </select>
                        </div>
                        <div className='mt-4'>
                            <h3 className='font-semibold'>Total price: <span className='text-warning' defaultValue="0"></span> </h3>
                        </div>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-warning w-1/4 ml-auto mr-auto">Send a request</button>
                </div>
            </form>
        </div>
    );
};

export default TakeATour;