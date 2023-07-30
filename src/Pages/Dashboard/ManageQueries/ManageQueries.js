import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt } from 'react-icons/fa';

const ManageQueries = () => {
    const url = 'https://vromon-server-roan.vercel.app/contacts';
    const { data: contactsInfo = [] } = useQuery({
        queryKey: ['contacts'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = () => {

    }

    return (
        <div>
            <h3 className='text-2xl text-warning font-semibold p-5 underline'>Users queries</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
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
                                    <td className='w-8'>
                                        <button onClick={() => handleDelete(cInfo.id)} title='Delete this item.' className='btn btn-ghost text-red-500'>
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
    );
};

export default ManageQueries; <h3>Manage Queries.</h3>