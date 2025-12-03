import React from 'react';
import { FaChalkboardTeacher, FaSearch, FaUserGraduate } from 'react-icons/fa';

const WorkDetails = () => {
    const steps = [
        {
            id: 1,
            icon: <FaSearch className="text-4xl  text-amber-500 mb-4" />,
            title: 'Browse Skills',
            description: 'Explore hundreds of skills in different categories and find what excites you.',
        },
        {
            id: 2,
            icon: <FaUserGraduate className="text-4xl text-amber-500 mb-4" />,
            title: 'Connect with Experts',
            description: 'Choose a provider, check their ratings, and contact them directly.',
        },
        {
            id: 3,
            icon: <FaChalkboardTeacher className="text-4xl  text-amber-500 mb-4" />,
            title: 'Book & Learn',
            description: 'Book your preferred slot and start learning right away, from anywhere.',
        },
    ];
    return (
        <div className="p-8  bg-slate-300 w-98 rounded-xl shadow-md md:w-55 lg:w-80">
            <h2 className="text-3xl font-bold text-center mb-5">How It Works</h2>
            <p className="text-gray-600 text-center mb-5">
                Learn new skills in three simple steps. It's fast, easy, and fun!
            </p>

            <div className="">
                {steps.map(step => (
                    <div
                        key={step.id}
                        className="   bg-slate-300 hover:bg-white px-6 py-2 rounded-lg  border border-gray-400 hover:shadow-xl transition duration-300  lg:h-30 md:h-37 mb-4"
                    >
                        <div className='flex'>
                            <div>{step.icon}</div>
                            <h3 className=" font-semibold ">{step.title}</h3>
                        </div>
                        <p className="text-gray-500 text-center text-xs">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkDetails;