import React from 'react';
import { Link } from 'react-router';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const ErrorPage = () => {
    return (
        <>
            <div className='bg-slate-200 '>
                <Navbar></Navbar>
                <div className='bg-slate-200 '>
                    <div className='grid place-items-center h-150'>
                        <img className=' w-3/4 h-3/6 md:w-4/12 md:h-10/12  rounded-2xl absolute   ' src="https://img.freepik.com/premium-vector/file-folder-mascot-character-design-vector_166742-4413.jpg" alt="" />
                        <Link>
                            <button className='btn bg-amber-400 text-white font-bold relative top-50 text-3xl hover:bg-amber-500 m-5 '>Back to home</button>
                        </Link>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>

    );
};

export default ErrorPage;