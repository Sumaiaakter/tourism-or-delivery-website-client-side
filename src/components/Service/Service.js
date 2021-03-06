import React from 'react';
import './Service.css'
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, title, date, description, image } = service;
    return (
        <div className="service mt-10px pb-3">
            <img src={image} alt="" />
            <h3 className="text-center">{title}</h3>
            <h5 className="text-center">Available: {date}</h5>
            <p className="px-3 text-center">{description}</p>
            <div className="btn text-center">
                <Link to={`/booking/${_id}`} className="px-3 text-center">
                    <button className="btn btn-dark m-2 text-center">Booking: {title}</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;
