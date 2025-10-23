import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logoImg from '../assets/SkillSwapLogo.png';
import { AuthContext } from '../Provider/AuthContext';
import { FaUser } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Navbar = () => {

    const { user, logout, setUser } = use(AuthContext)
    const [hover, setHover] = useState(false);

    const handleSignOut = () => {
        logout()
            .then(() => {
                setUser(null);
                toast.success('Logged out! Come back soon to continue learning.')
            })
            .catch(error => {
                console.log(error);
            })

    }


    const links = <>
        <li ><NavLink to='/' className={({ isActive }) =>
            isActive ? "underline  text-amber-400" : "text-white"
        }>Home</NavLink></li>
        <li><NavLink to='/profile' className={({ isActive }) =>
            isActive ? "underline  text-amber-400" : "text-white"
        }>My Profile</NavLink></li>
    </>

    return (

        <div className='sticky top-0 h-fit z-50'>
            <div className="navbar bg-gray-500 shadow-md h-14 mb-8 ">
                <div className="navbar-start px-0 md:px-5">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <img className='w-12 h-12 rounded-full' src={logoImg} alt="" />
                    <a className="hidden sm:block text-xl font-bold text-yellow-400 pl-3">SkillSwap</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end px-5">

                    {
                        user ? <div>  {user && (
                            <div className='flex items-center gap-4 relative'>
                                <div
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                    className='relative'
                                >
                                    {user.photoURL ? (
                                        <img
                                            src={user.photoURL}
                                            alt='User'
                                            className='w-10 h-10 rounded-full object-cover border border-gray-300 cursor-pointer'
                                        />
                                    ) : (
                                        <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer'>
                                            <img src="https://img.freepik.com/premium-vector/businessman-faceless-avatar-icon-male-character-symbol-modern-simple-vector-icon_901054-434.jpg" alt="" />
                                        </div>
                                    )}

                                    {hover && (
                                        <div className='absolute top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-lg whitespace-nowrap'>
                                            {user.displayName || 'User'}
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={handleSignOut}
                                    className='btn text-white font-bold bg-amber-400 hover:bg-amber-600'
                                >
                                    Logout
                                </button>
                            </div>
                        )} </div> : <div> <Link to='/login'><button className='btn text-amber-500 font-bold '>Login</button></Link>
                            <Link to='/signup' className='pl-3'><button className='btn bg-amber-300 text-white hover:bg-amber-400 font-bold '>Signup</button></Link>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;