import { useLocation } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();
    const hotelDetails = location.state?.hotelDetails;

    // Access the hotelDetails data here and use it as needed

    return (
        <div>
            <h2>Checkout Page</h2>
            <p>Title: {hotelDetails.title}</p>
            <p>Details: {hotelDetails.details}</p>
            {/* Rest of your code */}
        </div>
    );
};

export default Checkout;