import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../Firebase/Firebase.config';
import { Link, useNavigate } from 'react-router';

const auth = getAuth(app);

const Login = () => {
    const [email, setEmail] = useState('');  // email state
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const emailInput = e.target.email.value;
        const password = e.target.password.value;

        setError('');

        signInWithEmailAndPassword(auth, emailInput, password)
            .then(result => {
                console.log(result.user);
                // assignment instruction: skip email verification
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            });
    };

    const handleForgetPassword = () => {
        // Navigate to forget password page & pass email
        navigate('/forgetpassword', { state: { email } });
    };

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name='email'
                            value={email}                  // bind state
                            onChange={(e) => setEmail(e.target.value)} // update state
                            className="input"
                            placeholder="Email"
                            required
                        />

                        <label className="label">Password</label>
                        <input
                            type="password"
                            name='password'
                            className="input"
                            placeholder="Password"
                            required
                        />

                        <div onClick={handleForgetPassword} className="mt-2">
                            <a className="link link-hover cursor-pointer">Forgot password?</a>
                        </div>

                        {error && <p className='text-red-500 text-xs mt-2'>{error}</p>}

                        <button type='submit' className="btn btn-neutral mt-4 w-full">Login</button>

                        <p className='font-semibold text-center pt-5'>
                            Don’t Have An Account? <Link className='text-secondary hover:underline' to='/signup'>Register</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;
