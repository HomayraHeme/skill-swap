import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='grid place-items-center'>
            <img src="https://img.freepik.com/premium-vector/file-folder-mascot-character-design-vector_166742-4413.jpg" alt="" />
            <Link>
                <button className='bg-amber-400 text-white font-bold'>Back to home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;