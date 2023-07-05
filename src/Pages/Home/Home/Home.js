import React from 'react';
import Banner from '../Banner/Banner';
import Services from './../Services/Services';
import Destination from '../Destination/Destination';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destination></Destination>
            <Services></Services>
        </div>
    );
};

export default Home;