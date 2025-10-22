import React from 'react';
import { FaStar } from 'react-icons/fa';

const SkillsCard = ({ skill }) => {
    const { skillName, image, rating, price } = skill;

    return (
        <div className="card bg-base-100 shadow-md hover:scale-105 w-55 ">
            <figure className="px-4 pt-2">
                <img
                    src={image || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                    alt={skillName}
                    className="rounded-lg h-30 w-full object-cover"
                />
            </figure>

            <div className="card-body">
                <h2 className="card-title">{skillName}</h2>


                <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar
                            key={index}
                            className={index < rating ? "text-yellow-400" : "text-gray-300"}
                        />
                    ))}
                    <span className="ml-2 text-sm">{rating} / 5</span>
                </div>


                <p className="font-semibold text-lg">${price}</p>


                <div className="card-actions justify-between">

                    <button className="btn btn-outline bg-slate-700 text-white hover:bg-slate-500">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SkillsCard;
