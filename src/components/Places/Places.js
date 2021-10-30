import React from 'react';
import { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';

const Places = () => {
    const [place, setPlace] = useState([]);
    useEffect(() => {
        fetch("https://still-stream-37709.herokuapp.com/places")
            .then((response) => response.json())
            .then((data) => setPlace(data));
    }, []);


    return (
        <div className="container">
            <div>
                <h1>Manage Tourist Items: {place?.length}</h1>
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
                    {place?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{pd.title}</td>
                                <td>{pd.description}</td>
                                <td>{pd.image}</td>
                                <button className="btn bg-danger p-2">Delete</button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default Places;