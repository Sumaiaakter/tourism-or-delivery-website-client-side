import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import './Booking.css'

const Booking = () => {
    const { serviceId } = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`/tourists.json`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const service = data.filter(dt => dt.id == serviceId);

    return (
        <div className="container">

            <div className="single-service">
                {/* <h2>{serviceId}</h2> */}
                <img width="60%" src={service[0]?.img} alt="" />
                <h2>{service[0]?.name}</h2>
                <p>{service[0]?.experience}</p>
                <p>{service[0]?.description}</p>
            </div>

        </div>
    );
};

export default Booking;