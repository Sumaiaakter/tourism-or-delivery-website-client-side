import React, { useState } from 'react';
import AddPlaces from '../../AddPlaces/AddPlaces';
import Places from '../../Places/Places';
import AllTourists from '../AllTourists/AllTourists';
const AdminDashboard = () => {
    const [control, setControl] = useState("addPlaces");
    return (
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-2 ">
                            <div className="admin-area p-1">
                                <h6 className="m-2">Dashboard</h6>
                                <div className="all-menu mt-5">
                                    <li
                                        onClick={() => setControl("tourists")}
                                        className="admin-menu p-2"
                                    >
                                        All Tourists
                                    </li>
                                    <li
                                        onClick={() => setControl("addPlaces")}
                                        className="admin-menu p-2"
                                    >
                                        Add Places
                                    </li>
                                    <li
                                        onClick={() => setControl("manage")}
                                        className="admin-menu p-2"
                                    >
                                        Manage Places
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 text-center  text-center">
                            <div className="right-part ">
                                {control === "addPlaces" && <AddPlaces></AddPlaces>}
                                {control === "manage" && <Places></Places>}
                                {control === "tourists" && <AllTourists></AllTourists>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;