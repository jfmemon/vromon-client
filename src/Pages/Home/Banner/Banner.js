import React from 'react';
import img1 from '../../../Assets/img-1.jpg';
import img2 from '../../../Assets/img-2.jpg';
import img3 from '../../../Assets/img-3.jpg';
import img4 from '../../../Assets/img-4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-96 relative">
            <div id="slide1" className="carousel-item relative w-full justify-center">
                <img src={img1} className="w-full h-96" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute top-1/3 w-2/3'>
                    <h3 className='text-center lg:text-5xl sm:text-4xl text-white font-bold'>The right destination <br /> for you and your family. <br /><span className='text-warning'>-Cox's Bazar-</span></h3>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full justify-center">
                <img src={img2} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute top-1/3 w-2/3'>
                    <h3 className='text-center lg:text-5xl sm:text-4xl text-white font-bold'>The right destination <br /> for you and your family. <br /><span className='text-warning'>-Sajek-</span></h3>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full justify-center">
                <img src={img3} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute top-1/3 w-2/3'>
                    <h3 className='text-center lg:text-5xl sm:text-4xl text-white font-bold'>The right destination <br /> for you and your family.<br /><span className='text-warning'>-Bandarban-</span></h3>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full justify-center">
                <img src={img4} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute top-1/3 w-2/3'>
                    <h3 className='text-center lg:text-5xl sm:text-4xl text-white font-bold'>The right destination <br /> for you and your family.<br /><span className='text-warning'>-Rangamati-</span></h3>
                </div>
            </div>

        </div>
    );
};

export default Banner;