import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
const AllTourists = () => {
    const [tourist, setTourist] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allTourists")
            .then((res) => res.json())
            .then((data) => setTourist(data));
    }, []);
    //--------------------------------//
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tourist')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/allTourists/${id}`;
        fetch(url, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert("Successfully deleted")
                    const remaining = tourist.filter(service => service._id !== id);
                    setTourist(remaining)
                }
                console.log(data)

            })
    }
    return (
        <div>
            <h1>All Tourist Details:  {tourist.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {tourist?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.date}</td>
                            <button className="btn bg-danger p-2" onclick={() => handleDelete(tourist._id)}>Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default AllTourists;