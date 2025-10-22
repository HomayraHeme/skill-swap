import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

const ForgetPassword = () => {
    const location = useLocation();
    const [email, setEmail] = useState("");

    // login page theke pathano email pre-fill kora
    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location.state]);

    const handleReset = (e) => {
        e.preventDefault();
        // Gmail redirect
        window.location.href = "https://mail.google.com";
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 shadow-lg rounded-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>

                <form onSubmit={handleReset}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered w-full mb-4"
                        required
                    />

                    <button type="submit" className="btn btn-primary w-full">
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
