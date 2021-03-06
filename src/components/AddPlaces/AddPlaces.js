import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';

const AddPlaces = () => {
    const { user } = useAuth();

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.addEventEmail = user?.email;
        fetch("https://still-stream-37709.herokuapp.com/addPlaces", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };
    return (
        <div>
            <h1 className="mt-5 text-center text-primary">Please Add Places</h1>
            <div className="login-box w-25 m-auto mt-5">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("title")}
                                placeholder="Name"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("date")}
                                // placeholder="Name"
                                type="date"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("description")}
                                placeholder="Description"

                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("image", { required: true })}
                                placeholder="Image Link"

                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <select {...register("EventColor")} className="p-2 m-2 w-100">
                                <option value="red">red</option>
                                <option value="green">green</option>
                                <option value="blue">blue</option>
                                <option value="orange">orange</option>
                                <option value="black">black</option>
                            </select>
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add" className="btn btn-primary w-50" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPlaces;