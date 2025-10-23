import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { use, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const auth = getAuth(app);

const Login = () => {
    const [email, setEmail] = useState('');  // email state
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { signIn, signInWithGoogle } = use(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const emailInput = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)

        setError('');

        signInWithEmailAndPassword(auth, emailInput, password)
            .then(result => {
                console.log(result.user);
                // assignment instruction: skip email verification
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);

                if (error.code === 'auth/invalid-email') {
                    setError('Invalid email address!');
                } else if (error.code === 'auth/user-not-found') {
                    setError('No user found with this email.');
                } else if (error.code === 'auth/wrong-password') {
                    setError('Incorrect password. Try again!');
                } else {
                    setError('Login failed. Please try again.');
                }
            });
    };

    const handleForgetPassword = () => {
        // Navigate to forget password page & pass email
        navigate('/forgetpassword', { state: { email } });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate(location.state || '/')
            })
            .catch(error => {
                console.log(error);
            })

    }


    return (
        <div className='w-full max-w-120 bg-amber-200 mx-auto mb-5 text-center rounded-2xl shadow-2xl'>
            <div className='mx-auto mb-5 text-center w-full max-w-sm '>
                <h1 className='text-4xl text-amber-500 pt-5 font-bold'>Back to growing your skills?</h1>
                <h1 className='text-sm text-slate-600 font-bold'>Unlock your personalized learning space — where you can manage your lessons, connect with mentors, and grow your skills while helping others grow theirs. Log in now to continue building your future with SkillSwap.</h1>
            </div>
            <div className='flex justify-center mb-10 '>

                <div className="card bg-slate-200 w-full max-w-70 md:max-w-sm shrink-0 shadow-2xl py-5 mb-10">
                    <h2 className='font-semibold text-2xl text-center text-slate-600'>Login your account</h2>
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



                            {error && (
                                <p className='text-red-500 text-xs mt-2 text-center'>
                                    {error}
                                </p>
                            )}

                            <button type='submit' className="btn btn-neutral mt-4 w-full">Login</button>

                            <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                            <p className='font-semibold text-center pt-5'>
                                Don’t Have An Account? <Link className='text-secondary hover:underline' to='/signup'>SignUp</Link>
                            </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
