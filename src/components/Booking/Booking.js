import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import './Booking.css'

const Booking = () => {
    const { serviceId } = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://still-stream-37709.herokuapp.com/places/${serviceId}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    // const service = data.filter(dt => dt._id == serviceId);

    return (
        <div className="container">
            <h2 className="text-center text-primary">Your Booking Details</h2>
            <div className="single-service m-5">
                <h2 className="text-center">Booking id : {serviceId}</h2>
                <img width="60%" src={data.image} alt="" />
                <h2 className="text-center">{data.title}</h2>
                <p className="text-center">{data.date}</p>
                <p className="text-center">{data.description}</p>
            </div>

        </div>
    );
};

export default Booking;