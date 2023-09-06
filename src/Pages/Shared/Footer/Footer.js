import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../Assets/FooterImages/facebook.png';
import img2 from '../../../Assets/FooterImages/linkedin.png';

const Footer = () => {
    return (
        <footer className="footer pt-10 bg-base-300 text-base-content justify-evenly">
            <div>
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4">
                    <Link to='https://www.facebook.com/profile.php?id=100031330742154'><img className='w-8' src={img1} alt="" /></Link>
                    <Link to='https://www.linkedin.com/in/md-jannatul-ferdous-emon-108100180/'><img className='w-8' src={img2} alt="" /></Link>
                </div>
                <div className='mt-10 pb-2'>
                    <small>&copy; All rights reserved by Vromon.</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;