import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const SkillsCard = ({ skill }) => {
    const { skillName, image, rating, price, skillId } = skill;

    return (
        <div className="  bg-slate-300  shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-transform hover:scale-105 w-full md:w-45 flex flex-col justify-between">
            <img
                src={image || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                alt={skillName}
                className="h-28 w-full object-cover"
            />

            <div className="px-3 py-2 flex flex-col justify-between flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">{skillName}</h2>

                <div className="flex justify-between items-center text-sm mb-2">
                    <p className="font-medium text-gray-700">${price}</p>
                    <div className="flex items-center">
                        <FaStar className="text-yellow-400 text-xs mr-1" />
                        <span className="text-gray-600">{rating} / 5</span>
                    </div>
                </div>

                <Link to={`/details/${skillId}`}>
                    <button className="w-full py-1.5 text-sm bg-slate-700 text-amber-400 font-semibold rounded outline-1 outline-white hover:bg-slate-600 transition">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SkillsCard;
