import React, { useEffect, useState, useContext } from 'react';
import { FaStar, FaClock, FaChartBar, FaUserCircle, FaArrowLeft, FaDollarSign } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import Spinner from '../Component/Spinner';
import AnimationLoad from '../Component/Animation';
import { AuthContext } from '../Provider/AuthContext';
const useAuth = () => {
    const { user } = useContext(AuthContext);
    return { user };
};

const extendedSkillInfo = {
    1: { duration: '4 Weeks', level: 'Beginner', learns: ['Basic Chords', 'Strumming Patterns', 'Reading Tabs'] },
    2: { duration: '8 Weeks', level: 'Intermediate', learns: ['Daily Conversation', 'Idioms & Phrases', 'Pronunciation'] },
    3: { duration: '6 Weeks', level: 'All Levels', learns: ['Aperture/Shutter Speed', 'Composition Rules', 'Lighting Techniques'] },
    4: { duration: '12 Weeks', level: 'Beginner', learns: ['Sun Salutations', 'Basic Poses (Asanas)', 'Breathing Exercises (Pranayama)'] },
    5: { duration: '5 Weeks', level: 'Beginner', learns: ['Knife Skills', 'Meal Prep', 'Basic Sauces', 'Simple Recipes (Pasta, Salad)'] },
    6: { duration: '8 Weeks', level: 'Beginner', learns: ['Variables & Data Types', 'Control Flow', 'Functions', 'Basic Python/JS Syntax'] },
    7: { duration: '4 Weeks', level: 'Intermediate', learns: ['Idea Generation', 'Character Development', 'Dialogue Writing', 'Editing Tips'] },
    8: { duration: '10 Weeks', level: 'Intermediate', learns: ['Color Theory', 'Typography', 'Layout Design', 'Using Canva/Photoshop'] },
    9: { duration: '4 Weeks', level: 'Intermediate', learns: ['Barre Chords', 'Fingerstyle Basics', 'Basic Music Theory'] },
    10: { duration: '6 Weeks', level: 'All Levels', learns: ['Fluent Dialogue', 'Cultural Context', 'Vocabulary Expansion'] },
    11: { duration: '8 Weeks', level: 'All Levels', learns: ['HIIT Workouts', 'Strength Training', 'Cardio Endurance', 'Nutrition Tips'] },
    12: { duration: '7 Weeks', level: 'Beginner', learns: ['Mixing Ingredients', 'Oven Temperatures', 'Icing Techniques', 'Bread & Pastry Recipes'] },
    13: { duration: '10 Weeks', level: 'Intermediate', learns: ['DOM Manipulation', 'ES6 Features', 'Asynchronous JS (Promises)', 'Basic Frontend Projects'] },
    14: { duration: '4 Weeks', level: 'All Levels', learns: ['Rhyme & Meter', 'Free Verse', 'Metaphors & Similes', 'Poetic Forms'] },
    15: { duration: '12 Weeks', level: 'Expert', learns: ['User Research', 'Wireframing & Prototyping', 'Usability Testing', 'Figma/Sketch Mastery'] },
};


const DetailsPage = () => {
    const skills = useLoaderData();
    const { skillId } = useParams();
    const [skill, setSkill] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '' });

    const { user } = useAuth();
    const isLoggedIn = !!user;

    useEffect(() => {
        const skillDetails = skills?.find(singleSkill => singleSkill.skillId == skillId);
        setSkill(skillDetails);

        if (isLoggedIn && user.email) {
            setFormData(prev => ({ ...prev, email: user.email }));
        }
    }, [skills, skillId, isLoggedIn, user]);

    if (!skills || skills.length === 0 || skill === null) return <p className="text-center mt-10 text-white"><Spinner /></p>;

    if (skill === undefined) {
        return (
            <div className="text-center mt-20 p-10 bg-gray-800 text-white rounded-xl mx-auto max-w-lg">
                <h2 className="text-2xl font-bold">404 - Skill Not Found</h2>
                <p className="mt-4">The course you are looking for does not exist.</p>
                <Link to='/skills'>
                    <button className="bg-amber-400 text-slate-800 py-2 px-4 rounded-lg hover:bg-amber-500 mt-6 font-bold">Go Back to Courses</button>
                </Link>
            </div>
        );
    }

    const extendedInfo = extendedSkillInfo[skill.skillId] || { duration: 'N/A', level: 'General', learns: ['Details to be updated soon.'] };
    const isSlotsFull = skill.slotsAvailable <= 0;


    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isLoggedIn) {
            toast.error("You must be logged in to book a session.");
            return;
        }

        if (isSlotsFull) {
            toast.error("Sorry, all slots are currently booked for this session.");
            return;
        }

        toast.success(`Session booked successfully for ${formData.name}!`);
        setFormData({ name: '', email: '' });
    };

    return (
        <AnimationLoad>
            <div className="max-w-7xl mx-auto my-8 md:my-16 p-4 sm:p-8 bg-white rounded-xl md:rounded-3xl shadow-lg w-full md:w-11/12">

                <div className="mb-6">
                    <Link to='/skills' className="inline-flex items-center text-gray-600 hover:text-amber-500 transition font-semibold text-sm">
                        <FaArrowLeft className="mr-2 text-xs" />
                        Back to Courses
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">

                    <div className="lg:col-span-2 order-2 lg:order-1">

                        <div className="w-full mb-6 lg:hidden">
                            <img
                                src={skill.image?.trim()}
                                alt={skill.skillName}
                                className="w-full h-auto max-h-80 object-cover rounded-lg shadow-md"
                            />
                        </div>

                        <div className="mb-6 pb-4 border-b border-gray-100">
                            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-1">{skill.category}</p>
                            <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-slate-900 leading-snug">{skill.skillName}</h1>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 p-4 border-y border-gray-100">
                            {[
                                { icon: FaStar, value: skill.rating, label: 'Rating', color: 'text-amber-500' },
                                { icon: FaClock, value: extendedInfo.duration, label: 'Duration', color: 'text-blue-500' },
                                { icon: FaChartBar, value: extendedInfo.level, label: 'Level', color: 'text-green-600' },
                                { icon: FaDollarSign, value: skill.price, label: 'Price', color: 'text-gray-900', isPrice: true },
                            ].map((stat, index) => (
                                <div key={index} className="flex flex-col text-center border-l-2 border-gray-100 first:border-l-0">
                                    <stat.icon className={`${stat.color} text-2xl mb-1 mx-auto`} />
                                    <span className="text-lg font-bold text-slate-800 leading-none">
                                        {stat.isPrice ? `$${stat.value}` : stat.value}
                                    </span>
                                    <span className="text-xs text-slate-500 uppercase tracking-wider mt-1">{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mb-8">
                            <h2 className="text-xl font-bold mb-3 text-slate-800">Overview</h2>
                            <p className="text-slate-700 leading-relaxed text-base">{skill.description}</p>
                        </div>

                        <div className="mb-8 p-5 bg-gray-50 rounded-lg border border-gray-100">
                            <h2 className="text-xl font-bold mb-3 text-amber-700">What You'll Achieve</h2>
                            <ul className="list-none text-slate-700 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                                {extendedInfo.learns.map((item, index) => (
                                    <li key={index} className="flex items-start text-sm">
                                        <span className="text-amber-500 mr-2 mt-1 leading-none text-xs">●</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-4 bg-gray-800 rounded-lg text-white shadow-md">
                            <div className="flex items-center mb-2">
                                <FaUserCircle className="mr-2 text-xl text-amber-400" />
                                <h3 className="text-lg font-semibold text-amber-400">Provider: {skill.providerName}</h3>
                            </div>
                            <p className="text-sm text-gray-300">Contact: <a href={`mailto:${skill.providerEmail}`} className="text-amber-300 hover:underline">{skill.providerEmail}</a></p>
                            <p className={`mt-3 font-semibold text-sm ${isSlotsFull ? 'text-red-400' : 'text-green-400'}`}>
                                Slots Available: <span className="text-white font-bold">{skill.slotsAvailable}</span>
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-1 order-1 lg:order-2">

                        <div className="w-full mb-8 hidden lg:block">
                            <img
                                src={skill.image?.trim()}
                                alt={skill.skillName}
                                className="w-full h-auto max-h-[300px] object-cover rounded-xl shadow-xl border-b-4 border-amber-300/50"
                            />
                        </div>

                        <div className="lg:sticky lg:top-8 p-6 border-t-4 border-amber-500 rounded-lg bg-gray-50 shadow-xl">

                            {isLoggedIn ? (
                                <BookingForm
                                    handleSubmit={handleSubmit}
                                    handleChange={handleChange}
                                    formData={formData}
                                    isSlotsFull={isSlotsFull}
                                />
                            ) : (
                                <LoginPrompt />
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </AnimationLoad>
    );
};


const BookingForm = ({ handleSubmit, handleChange, formData, isSlotsFull }) => (
    <>
        <h2 className="text-2xl font-bold mb-5 text-slate-800">Enroll Now</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="input input-bordered w-full text-black p-3 border border-gray-300 rounded-md focus:border-amber-500 transition"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="input input-bordered w-full text-black p-3 border border-gray-300 rounded-md focus:border-amber-500 transition"
            />
            <button
                type="submit"
                disabled={isSlotsFull}
                className={`py-3 px-4 rounded-lg font-bold text-base transition duration-300 ease-in-out uppercase tracking-wider
                    ${isSlotsFull
                        ? 'bg-red-600 text-white opacity-80 cursor-not-allowed'
                        : 'bg-amber-400 text-white outline-1 outline-white hover:bg-amber-600'}`
                }
            >
                {isSlotsFull ? 'FULLY BOOKED' : `BOOK SESSION`}
            </button>
        </form>
    </>
);

const LoginPrompt = () => (
    <div className="p-4 text-center bg-amber-100 rounded-lg border-2 border-amber-400">
        <h2 className="text-xl font-bold mb-3 text-slate-800">Login Required</h2>
        <p className="text-slate-700 mb-4 text-sm">You must be logged in to enroll in this course.</p>
        <Link to="/login">
            <button className="py-2 px-4 rounded-lg font-bold text-white bg-amber-500 hover:bg-amber-600 transition">
                Go to Login
            </button>
        </Link>
    </div>
);

export default DetailsPage;