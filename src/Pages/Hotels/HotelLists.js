import { useNavigate } from 'react-router-dom';

const HotelLists = ({ hotel }) => {
    const { id, img, title, details, price } = hotel;
    const navigate = useNavigate();

    const handleBookNowClick = () => {
        navigate(`/checkout/${id}`, { state: { hotelDetails: hotel } });
    };

    return (
        <div className="flex flex-col p-5 my-4 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ms-auto me-auto">
            <img className="rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={img} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>
                <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">Tk: {price} (Per night)</p>
                <button onClick={handleBookNowClick} className='btn btn-outline btn-warning w-28'>Explore Now</button>
            </div>
        </div>
    );
};

export default HotelLists;
