import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://still-stream-37709.herokuapp.com/places')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])
    return (
        <div id="services" >
            <h2 className=" m-5">Our services</h2>
            <div className="service-container container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Services;