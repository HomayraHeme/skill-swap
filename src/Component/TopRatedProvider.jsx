import React from 'react';
import { FaStar } from 'react-icons/fa';

const TopRatedProvider = () => {
    const providers = [
        {
            id: 1,
            name: "Alex Martin",
            skill: "Guitar",
            rating: 5,
            image: " https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            id: 2,
            name: "Sara Hossain",
            skill: "Spoken English",
            rating: 4,
            image: " https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            id: 3,
            name: "John Doe",
            skill: "Photography",
            rating: 5,
            image: " https://randomuser.me/api/portraits/men/76.jpg",
        },
    ];

    return (
        <div className="p-4 bg-white shadow-md rounded-lg w-80">

            <h2 className="text-xl   mb-4 text-center font-bold">Top Rated Providers</h2>
            {providers.map(provider => (
                <div
                    key={provider.id}
                    className="flex items-center gap-4 mb-4 p-2 hover:bg-gray-50 rounded-lg border border-gray-400"
                >
                    <img
                        src={provider.image}
                        alt={provider.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                        <h3 className="font-semibold">{provider.name}</h3>
                        <p className="text-sm text-gray-500">{provider.skill}</p>
                        <div className="flex items-center mt-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <FaStar
                                    key={index}
                                    className={index < provider.rating ? "text-yellow-400" : "text-gray-300"}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopRatedProvider;
