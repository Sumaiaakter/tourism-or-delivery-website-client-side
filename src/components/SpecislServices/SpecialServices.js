import React, { useEffect, useState } from 'react';
import SpecialService from '../SpecialService/SpecialService';

const SpecialServices = () => {
    const [specialServices, setSpecialServices] = useState([]);
    useEffect(() => {
        fetch('https://still-stream-37709.herokuapp.com/places')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSpecialServices(data)
            })
    }, [])
    return (
        <div id="specialServices">
            <h2 className=" m-5 text-center">Our Special services</h2>
            <div className="service-container container">
                {
                    specialServices.map(specialService =>
                        <SpecialService

                            key={specialService.id}
                            specialService={specialService}

                        >

                        </SpecialService>
                    )
                }
            </div>
        </div>
    );
};

export default SpecialServices;