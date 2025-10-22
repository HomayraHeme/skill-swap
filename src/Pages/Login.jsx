import React from 'react';

const Login = () => {
    return (
        <div>
            <div className='flex justify-center min-h-screen items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='font-semibold text-2xl text-center '>Login your account</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">

                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />

                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" required />

                            <div><a className="link link-hover">Forgot password?</a></div>

                            {error && <p className='text-red-500 text-xs'>{error}</p>}


                            <button type='submit' className="btn btn-neutral mt-4"> Login </button>
                            <p className='font-semibold text-center pt-5'>Dont’t Have An Account ? <Link className='text-secondary hover:underline' to='/auth/register'>Register</Link> </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;