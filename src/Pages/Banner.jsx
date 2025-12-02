import React from 'react';
import App from '../Component/Hero';
import { Link } from 'react-router';
import AnimationLoad from '../Component/Animation';

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto max-w-full bg-base-300 py-8'>
            <div className="hero   bg-slate-300 rounded-2xl shadow-md overflow-hidden">
                <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start px-2 py-8 lg:py-5 gap-6">


                    <div className='px-8'>
                        <App />
                    </div>
                    <div className='w-full px-8 text-center lg:text-left'>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            <span className='text-amber-400'>Empower</span> Yourself <br />
                            With New <span className='text-slate-600'>Skills</span>
                        </h1>
                        <p className="py-4 text-gray-700 text-sm sm:text-base lg:text-lg mb-6">
                            Discover a platform built for exchanging knowledge. Teach what you love, learn what you need, and unlock opportunities to grow personally and professionally. Experience the joy of learning and teaching at the same time.
                        </p>
                        <Link to='login'> <button className="btn bg-slate-600 text-amber-400 font-bold hover:bg-slate-500 px-6 py-3 text-sm sm:text-amber-400">
                            Get Started
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
