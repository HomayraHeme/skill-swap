import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Signup = () => {


    const { createUser, setUser, updateUser } = use(AuthContext)
    const [passError, setPassError] = useState('')
    const [showPassword, setShowPassword] = useState(false);


    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        const length6dPattern = /^.{6,}$/;


        if (!length6dPattern.test(password)) {
            console.log('password did not match');
            setPassError('Password must be six character or longer');
            return;
        }
        else if (!casePattern.test(password)) {
            setPassError('Password must have at least one upper case and one lower case character')
            return;
        }


        else {
            setPassError('')

            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    // console.log(user);
                    updateUser({ displayName: name, photoURL: photo }).then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate('/')
                    })
                        .catch((error) => {
                            console.log(error);
                            setUser(user);
                        })

                })
                .catch((error) => {
                    // const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });


        };
    };
    const handleTogglePasswordShow = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }
    return (
        <div>
            <div className='flex justify-center min-h-screen items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='font-semibold text-2xl text-center '>Register your account</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">

                            <label className="label">Your Name</label>
                            <input name='name' type="text" className="input" placeholder="Enter your name" required />


                            <label className="label">Photo URL</label>
                            <input name='photo' type="text" className="input" placeholder="Enter your photo URL" />

                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" required />

                            <label className="label">Password</label>
                            <div className='relative'>
                                <input type={showPassword ? 'text' : 'password'} name='password' className="input" placeholder="Password" />
                                <button onClick={handleTogglePasswordShow} className=" btn xs absolute right-4">{
                                    showPassword ? <FaEyeSlash />
                                        : <FaEye></FaEye>}</button>
                            </div>
                            {passError && <p className='text-xs text-red-500'>{passError} </p>}

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn btn-neutral mt-4">Register</button>

                            <p className='font-semibold text-center pt-5'>All ready Have an account ? <Link className='text-secondary hover:underline' to='/login'>Login</Link> </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );

};
export default Signup;