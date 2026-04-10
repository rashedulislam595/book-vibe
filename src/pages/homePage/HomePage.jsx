import React from 'react';
import BannerHome from '../../components/hero_banner/BannerHome';
import AllBooks from '../../components/all_Book/AllBooks';

const HomePage = () => {
    return (
        <div>
            <BannerHome/>
            <AllBooks/>
        </div>
    );
};

export default HomePage;