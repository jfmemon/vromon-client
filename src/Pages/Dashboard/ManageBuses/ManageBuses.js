import React, { useEffect, useState } from 'react';
import { FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageBuses = () => {
    const [addMoreTickets, setAddMoreTickets] = useState([]);
    const [ticketsData, setTicketsData] = useState([]);
    console.log(addMoreTickets);


    useEffect(() => {
        const serviceId = '64a94a4c6b2df0def9f64cc7'; // Replace with the actual service ID

        // Fetch ticket data from the server
        fetch(`https://vromon-server-roan.vercel.app/services/${serviceId}`)
            .then((res) => res.json())
            .then((data) => {
                setTicketsData(data.bus); // Assuming "data" is an object containing a "bus" array with ticket objects
            })
            .catch((error) => {
                console.error('Error fetching ticket data:', error);
            });
    }, []);

    const handleAddBusTicket = (event) => {
        event.preventDefault();
        const form = event.target;

        const newTickets = {
            img: addMoreTickets.busImage,
            name: addMoreTickets.busName,
            from: addMoreTickets.from,
            to: addMoreTickets.to,
            depurtureTime: addMoreTickets.departureTime,
            arrivalTime: addMoreTickets.arrivalTime,
            price: parseInt(addMoreTickets.price)
        }

        const serviceId = '64a94a4c6b2df0def9f64cc7';

        fetch(`https://vromon-server-roan.vercel.app/services/bus/${serviceId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([newTickets])
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Ticket added successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })
            .catch((err) => console.error(err));
    }

    const handleDelete = () => {

    }

    const handleInput = event => {
        event.preventDefault();
        const fieldName = event.target.name;
        const value = event.target.value;
        const newTickets = { ...addMoreTickets }; // Create a copy of ticket object
        newTickets[fieldName] = value;
        setAddMoreTickets(newTickets);
    }

    return (
        <div className='w-full'>
            <h3 className='text-3xl p-3 font-semibold text-warning underline'>Add more tickets</h3>
            <div>
                <form onSubmit={handleAddBusTicket} className="card-body">
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                        <div className='flex flex-col'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Bus name</span>
                                </label>
                                <input onBlur={handleInput} name='busName' type="text" className="input input-bordered w-3/4" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">From</span>
                                </label>
                                <input onBlur={handleInput} name='from' type="text" className="input input-bordered w-3/4" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">To</span>
                                </label>
                                <input onBlur={handleInput} name='to' type="text" className="input input-bordered w-3/4" required />
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Departure time</span>
                                </label>
                                <input onBlur={handleInput} name='departureTime' type="text" className="input input-bordered w-3/4" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Arrival time</span>
                                </label>
                                <input onBlur={handleInput} name='arrivalTime' type="text" className="input input-bordered w-3/4" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input onBlur={handleInput} name='price' type="number" className="input input-bordered w-3/4" placeholder='TK' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Bus image url</span>
                                </label>
                                <input onBlur={handleInput} name='busImage' type="url" className="input input-bordered w-3/4" placeholder="https://example.com" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline btn-warning w-1/4 ml-auto mr-auto"><FaPlusCircle /> Add</button>
                    </div>
                </form>
            </div>
            <div className='table-responsive'>
                <div className='table-responsive'>
                    <h3 className='text-3xl font-semibold p-3 text-warning'>Stored buses:</h3>
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Bus name</th>
                                <th>Image</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Departure</th>
                                <th>Arrival</th>
                                <th>Price (TK)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ticketsData.map((ticket, i) =>
                                    <tr className="hover" key={ticket.id}>
                                        <th className='w-4'>{i + 1}</th>
                                        <td className='w-6'>{ticket.name}</td>
                                        <td className='w-24'><img src={ticket.img} alt="" className='rounded' /></td>
                                        <td className='w-12'>{ticket.from}</td>
                                        <td className='w-12'>{ticket.to}</td>
                                        <td className='w-8'>{ticket.depurtureTime}</td>
                                        <td className='w-8'>{ticket.arrivalTime}</td>
                                        <td className='w-8'>{ticket.price}</td>
                                        <td className='w-8'>
                                            <button onClick={() => handleDelete(ticket.id)} title='Delete this item.' className='btn btn-ghost text-red-500'>
                                                <FaTrashAlt></FaTrashAlt>
                                            </button>
                                        </td>
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

export default ManageBuses;