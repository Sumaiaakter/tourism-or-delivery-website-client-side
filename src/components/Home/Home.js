import React from 'react';
import { useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import SpecialServices from '../SpecislServices/SpecialServices';

const Home = () => {
    const [places, setPlaces] = useState([]);
    const [search, setSearch] = useState("");
    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    };
    console.log(search)
    const handleSearch = () => {
        fetch(`http://localhost:5000/searchPlaces?search=${search}`)
            .then((res) => res.json())
            .then((results) => setPlaces(results));
    };
    return (
        <div id="home">

            <Banner></Banner>
            <div className="text-center mt-5">
                <p>Modern & Beautiful</p>
                <h1>
                    Our Most Popular Adventures</h1>
                <div className="input-box">
                    <input onChange={handleInput} type="text" className="p-2 m-3" />
                    <button onClick={handleSearch} className="btn btn-primary m-1">
                        Search
                    </button>
                </div>
            </div>
            <div className="events-container">
                <div className="row container">
                    {places?.map((pd) => (
                        <div className="col-md-4">
                            <div className="event border border">
                                <div className="event-img">
                                    <img
                                        className="w-100"
                                        src={pd.image}
                                        alt=""
                                    />
                                </div>
                                <div
                                    style={{ backgroundColor: pd?.EventColor }}
                                    className="title-container p-2 "
                                >
                                    <button>{pd.title}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Services></Services>
            <SpecialServices></SpecialServices>
            <Footer></Footer>
        </div>
    );
};

export default Home;