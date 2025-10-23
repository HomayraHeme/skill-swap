import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';


const Signup = () => {


    const { createUser, setUser, updateUser } = use(AuthContext)
    const [passError, setPassError] = useState('')
    const [error, setError] = useState('');
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





        };

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo });
                    toast.success("Account created successfully! Welcome to SkillSwap.");
                    navigate('/')
                })
                    .catch((authError) => {
                        console.log("Update user error:", authError);
                        setError(authError.message);
                        toast.error(authError.message);
                    });
            })
            .catch((authError) => {
                console.log("Create user error:", authError);
                setError(authError.message);
                toast.error(authError.message);
            });
    };
    const handleTogglePasswordShow = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }
    return (
        <div className='w-full max-w-120 bg-amber-200 mx-auto mb-5 text-center rounded-2xl shadow-2xl'>
            <div className='mx-auto mb-5 text-center w-full max-w-sm '>
                <h1 className='text-4xl text-amber-500 pt-5 font-bold'> Join the SkillSwap Community and Grow Together!</h1>
                <h1 className='text-sm text-slate-600 font-bold'> Create your account today to connect with passionate learners and skilled mentors from around the world. Unlock exclusive features, share your talents, learn new skills, and be part of a supportive network that helps you reach your full potential.
                    Sign up now and start swapping skills that inspire growth!</h1>
            </div>

            <div className='flex justify-center min-h-screen items-center'>
                <div className="card bg-slate-200 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='font-semibold text-2xl text-center text-slate-700'>SignUp your account</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">

                            <label className="label">Your Name</label>
                            <input name='name' type="text" className="input" placeholder="Enter your name" required />


                            <label className="label">Photo URL</label>
                            <input name='photo' type="text" className="input" placeholder="Enter your photo URL" required />

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
                            <button type='submit' className="btn btn-neutral mt-4">SignUp</button>

                            {error &&
                                <p className='text-red-500 text-xs mt-2 text-center'>
                                    {error}
                                </p>
                            }


                            <p className='font-semibold text-center pt-5'>All ready Have an account ? <Link className='text-secondary hover:underline' to='/login'>Login</Link> </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );

};
export default Signup;