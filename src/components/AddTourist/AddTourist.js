import React from 'react';
import './AddTourist.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const AddTourist = () => {
    const { user } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.status = user?.email;
        fetch("https://still-stream-37709.herokuapp.com/addTourist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);

    };
    return (
        <div>
            <h1 className="mt-5 text-center text-primary">
                Please register As a Tourist
            </h1>
            <div className="login-box w-25 m-auto mt-5">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="Name"
                                className="p-2 m-2"
                            />
                            <br />

                            <input
                                {...register("email", { required: true })}
                                placeholder="Email"
                                className="p-2 m-2"
                            />
                            <br />
                            <input
                                {...register("date", { required: true })}
                                placeholder="date"
                                defaultValue={new Date()}
                                className="p-2 m-2"
                            />
                            <br />
                            <input
                                {...register("description", { required: true })}
                                placeholder="Description"
                                className="p-2 m-2"
                            />
                            <br />
                            <input
                                {...register("books", { required: true })}
                                placeholder="Destination"
                                className="p-2 m-2"
                            />
                            <br />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" className="btn btn-primary w-50" />
                        </form>
                        <p className="m-2 mb-2">
                            already have account?{" "}
                            <Link to="/login"><span className="text-danger">create account</span></Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTourist;