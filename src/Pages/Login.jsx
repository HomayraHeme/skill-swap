import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { AuthContext } from '../Provider/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    const location = useLocation();

    const { signIn, signInWithGoogle } = useContext(AuthContext);


    useEffect(() => {

        setEmail('');
        setPassword('');
        setError('');
    }, []);


    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await signIn(email, password);
            console.log('Logged in:', res.user);
            setEmail('');
            setPassword('');
            toast.success('Welcome back! You’ve successfully logged in.');
            navigate(location.state?.from || '/');
        }
        catch (err) {
            console.log("Firebase Error Object:", err);
            if (err.code === 'auth/invalid-email') {
                setError('Invalid email format. Please check your email.');
            }

            else if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
                setError('Invalid email or password.');
            }
            else {

                let displayMessage = err.message.replace('Firebase: Error', '').replace(/\(([^)]+)\)/g, '').trim();
                setError(displayMessage || 'Login failed! An unexpected error occurred.');
            }


            toast.error(err.message);
        }
    };


    const handleForgetPassword = () => {
        navigate('/forgetpassword', { state: { email } });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate(location.state?.from || '/')
            })
            .catch(error => {
                console.log(error);
                toast.error('Google sign-in failed.');
            })

    }


    return (
        <div className='w-full max-w-80 bg-amber-200 mx-auto mb-5 text-center rounded-2xl shadow-2xl'>
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
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input"
                                placeholder="Email"
                                required
                            />
                            <label className="label">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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

                            <button type='submit' className="btn bg-amber-400 text-white font-bold mt-4 w-full">Login</button>

                            <button type='button' onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
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
