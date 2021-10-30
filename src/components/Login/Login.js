import React from 'react';
import useAuth from './../../Hooks/useAuth';
import './Login.css'
const Login = () => {

    const { signInWithGoogle } = useAuth();
    return (
        <div className="login ">
            <h2 className="text-center m-5"> Please Login</h2>
            <div className="login-box w-25 m-auto">
                <div className="box border border d-flex justify-content-center align-items-center">
                    <button onClick={signInWithGoogle} className="btn w-75  btn-primary">
                        <span className="text-white">Login With Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;