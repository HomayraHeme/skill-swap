import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import Spinner from '../Component/Spinner';
import AnimationLoad from '../Component/Animation';

const DetailsPage = () => {
    const skills = useLoaderData();
    const { skillId } = useParams();
    const [skill, setSkill] = useState({});
    const [formData, setFormData] = useState({ name: '', email: '' });


    useEffect(() => {
        const skillDetails = skills.find(singleSkill => singleSkill.skillId == skillId);
        setSkill(skillDetails);
    }, [skills, skillId]);

    if (!skill) return <p className="text-center mt-10 text-white"><Spinner></Spinner></p>;

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success(`Session booked successfully for ${formData.name}!`);
        setFormData({ name: '', email: '' });
    };

    return (
        <AnimationLoad>
            <div className="max-w-4xl mx-auto m-20 p-6 bg-slate-300 rounded-2xl shadow-lg text-white w-11/12">
                <Toaster position="top-right" />



                <div className="flex flex-col md:flex-row gap-6">

                    <div className='grid'>
                        <img
                            src={skill.image?.trim()}
                            alt={skill.skillName}
                            className="w-4/5    h-12/12   rounded-lg m-6"
                        />
                        <Link to='/skills'><button className="bg-amber-400 text-white py-2 px-4 rounded-lg hover:bg-amber-500 mt-10  ml-6 font-bold w-4/5">Back to Courses</button></Link>

                    </div>

                    <div className="flex-1">
                        <h1 className="text-3xl font-bold mb-2 text-amber-400">{skill.skillName}</h1>
                        <p className="text-slate-700 mb-1">Category: {skill.category}</p>
                        <p className=" text-slate-700 mb-2">
                            Provider: {skill.providerName} ({skill.providerEmail})
                        </p>

                        <div className="flex items-center mb-2">

                            <span className="text-gray-800 font-bold flex items-center"><span className='text-amber-400 mr-1'>Rating:</span>{skill.rating} <FaStar className="text-yellow-400 mr-1 ml-1" /> </span>
                            <span className="ml-auto pr-15 text-gray-800 font-bold"><span className='text-amber-400'>Price: </span> ${skill.price}</span>
                        </div>

                        <p className=" text-slate-700 mb-2">{skill.description}</p>
                        <p className="text-gray-800 mb-4 font-bold"><span className='text-amber-400 mr-1'>Slots Available:</span > {skill.slotsAvailable}</p>




                        <h2 className="text-xl font-bold mb-2 text-amber-400">Book a Session</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="input input-bordered w-full text-black"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="input input-bordered w-full text-black"
                            />
                            <button
                                type="submit"
                                className="bg-amber-400 text-white py-2 px-4 rounded-lg hover:bg-amber-500 transition font-bold"
                            >
                                Book Session
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AnimationLoad>
    );
};

export default DetailsPage;
