import React, { useEffect, useState } from 'react';
import './ManageServices.css'
const ManageServices = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/places/${id}`;
        fetch(url, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert("Successfully deleted")
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining)
                }
                console.log(data)

            })
    }
    return (
        <div className="container">
            <div>
                <h2 className="text-center">manage</h2>

                <div className="service-container container">
                    {
                        services.map(service => <div key={service._id}   >
                            <h3>{service.title}</h3>
                            <button className="btn btn-primary" onClick={() => handleDelete(service._id)}>Delete</button>
                        </div>)
                    }

                </div>
            </div>
        </div >
    );
};

export default ManageServices;