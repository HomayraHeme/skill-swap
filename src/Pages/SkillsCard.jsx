import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const SkillsCard = ({ skill }) => {
    const { skillName, image, rating, price, skillId } = skill;

    return (
        <div className="card bg-slate-300 shadow-md hover:scale-105 w-55 ">
            <figure className="px-4 pt-2">
                <img
                    src={image || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                    alt={skillName}
                    className="rounded-lg h-30 w-full object-cover"
                />
            </figure>

            <div className="card-body">
                <h2 className="card-title text-amber-500">{skillName}</h2>


                <div className='flex justify-between'>
                    <p className="font-semibold text-lg">${price}</p>
                    <div className="flex items-center">
                        {Array.from({ length: 1 }).map((_, index) => (
                            <FaStar
                                key={index}
                                className={index < rating ? "text-yellow-400" : "text-gray-300"}
                            />
                        ))}
                        <span className="ml-2 text-sm">{rating} / 5</span>
                    </div>




                </div>

                <div className="card-actions justify-between">

                    <Link to={`/details/${skillId}`}> <button className="btn  bg-slate-700 text-amber-400 font-bold hover:bg-slate-500">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SkillsCard;
