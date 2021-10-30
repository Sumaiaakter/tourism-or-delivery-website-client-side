import React from 'react';

const SpecialService = ({ specialService }) => {
    const { title, date, description, image } = specialService;
    return (
        <div className="service mt-10px pb-3">
            <img src={image} alt="" />
            <h3 className="text-center">{title}</h3>
            <h5 className="text-center">Available: {date}</h5>
            <p className="px-3 text-center">{description}</p>

        </div>
    );
};

export default SpecialService;