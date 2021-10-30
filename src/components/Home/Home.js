import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import SpecialServices from '../SpecislServices/SpecialServices';

const Home = () => {
    return (
        <div id="home">
            {/* <Header></Header> */}
            <Banner></Banner>
            <Services></Services>
            <SpecialServices></SpecialServices>
            <Footer></Footer>
        </div>
    );
};

export default Home;