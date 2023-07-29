import React, { useEffect, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageHotels = () => {
    const [addMoreHotels, setAddMoreHotels] = useState([]);
    // const hotelId = '64a94a4c6b2df0def9f64cc5';
    // console.log(addMoreHotels);
    const [hotelsData, setHotelsData] = useState([]);
    console.log(hotelsData);

    useEffect(() => {
        const serviceId = '64a94a4c6b2df0def9f64cc5'; // Replace with the actual service ID

        // Fetch hotel data from the server
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then((res) => res.json())
            .then((data) => {
                setHotelsData(data.hotels); // Assuming "data" is an object containing a "hotels" array with hotel objects
            })
            .catch((error) => {
                console.error('Error fetching hotel data:', error);
            });
    }, []);


    const handleAddHotel = (event) => {
        event.preventDefault();
        const form = event.target;

        const newHotels = {
            img: addMoreHotels.hotelImage,
            title: addMoreHotels.hotelName,
            details: addMoreHotels.hotelDetails,
            price: parseInt(addMoreHotels.price)
        }

        // console.log(newHotels);

        // console.log(addHotel);
        const serviceId = '64a94a4c6b2df0def9f64cc5';

        fetch(`http://localhost:5000/services/${serviceId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([newHotels])
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Hotels added successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })
            .catch((err) => console.error(err));
    }


    const handleInput = event => {
        event.preventDefault();
        const fieldName = event.target.name;
        const value = event.target.value;
        const newHotels = { ...addMoreHotels }; // Create a copy of hotelhotel object
        newHotels[fieldName] = value;
        setAddMoreHotels(newHotels);
    }

    return (
        <div>
            <h3 className='text-4xl text-center font-semibold text-warning underline'>Add more hotels</h3>
            <form onSubmit={handleAddHotel} className="card-body">
                <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                    <div className='flex flex-col'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Hotel name</span>
                            </label>
                            <input onBlur={handleInput} name='hotelName' type="text" className="input input-bordered w-3/4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Hotel details</span>
                            </label>
                            <textarea onBlur={handleInput} name='hotelDetails' type="text" className="input input-bordered w-3/4 h-24" required />
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price (Per night)</span>
                            </label>
                            <input onBlur={handleInput} name='price' type="number" className="input input-bordered w-3/4" placeholder='TK' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Hotel image url</span>
                            </label>
                            <input onBlur={handleInput} name='hotelImage' type="url" className="input input-bordered w-3/4" placeholder="https://example.com" required />
                        </div>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-outline btn-warning w-1/4 ml-auto mr-auto"><FaPlusCircle /> Add</button>
                </div>
            </form>
            <div>
                <h3 className='text-4xl font-semibold p-3 text-warning'>Stored hotels:</h3>
                <div className="sm:overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Hotel name</th>
                                <th>Details</th>
                                <th>Image URL</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hotelsData.map((hotel, i) =>
                                    <tr className="hover">
                                        <th>{i + 1}</th>
                                        <td>{hotel.title}</td>
                                        <td>{hotel.details}</td>
                                        <td>{hotel.img}</td>
                                        <td>{hotel.price}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageHotels;