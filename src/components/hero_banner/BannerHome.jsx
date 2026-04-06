import React from 'react';
import playBook from '../../assets/playBook.png'


const BannerHome = () => {
    return (
        <div className="w-11/12 mx-auto rounded-2xl bg-base-300 py-20 mt-12 ">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between md:px-28 md:mx-auto ">
                <img
                    src={playBook}
                    className="max-w-sm rounded-lg shadow-2xl bg-[#e2dbdb]"
                />
                <div className='md:w-[60%] w-full text-center md:text-left mt-10'>
                    <h1 className="text-4xl text-center md:text-left md:text-6xl font-bold mb-6 md:mb-12">Books to freshen up your bookshelf</h1>
                    
                    <button className="btn bg-[#23BE0A] text-white ">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default BannerHome;