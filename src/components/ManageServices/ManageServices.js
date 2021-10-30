import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageServices.css'
const ManageServices = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://still-stream-37709.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = id => {
        const url = `https://still-stream-37709.herokuapp.com/places/${id}`;
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
                <h1>Services Items: {services?.length}</h1>
                <Table striped bordered hover>

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Event Title</th>
                            <th>Event description</th>
                            <th>Image Link</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {services?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{pd.title}</td>
                                <td>{pd.description}</td>
                                <td>{pd.image}</td>
                                <button className="btn btn-primary" onClick={() => handleDelete(pd._id)}>Delete</button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>






            {/* <div>
                <h2 className="text-center">manage</h2>

                <div className="service-container container">
                    {
                        services.map(service => <div key={service._id}   >
                            <h3>{service.title}</h3>
                            <button className="btn btn-primary" onClick={() => handleDelete(service._id)}>Delete</button>
                        </div>)
                    }

                </div>
            </div> */}
        </div >
    );
};

export default ManageServices;