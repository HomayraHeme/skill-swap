import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router'; // Corrected import to react-router-dom
import SkillsCard from './SkillsCard'; // Assuming SkillsCard component exists
import Spinner from '../Component/Spinner'; // Assuming Spinner component exists
import { FaSortAmountDown, FaStar, FaDollarSign, FaFilter, FaArrowLeft } from 'react-icons/fa';

const Skills = () => {
    // Skills array loaded from the router loader
    const skills = useLoaderData();

    // State for filtering and sorting
    const [filteredSkills, setFilteredSkills] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc' for price sorting
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minRating, setMinRating] = useState('');

    // State for managing the filter sidebar visibility on mobile
    const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

    // Filter and Sort Logic useEffect
    useEffect(() => {
        if (!skills) return;

        let result = [...skills];

        // 1. Filter by price
        const minP = parseFloat(minPrice);
        const maxP = parseFloat(maxPrice);

        if (!isNaN(minP)) {
            result = result.filter(skill => skill.price >= minP);
        }
        if (!isNaN(maxP)) {
            result = result.filter(skill => skill.price <= maxP);
        }

        // 2. Filter by rating
        const minR = parseFloat(minRating);
        if (!isNaN(minR)) {
            result = result.filter(skill => skill.rating >= minR);
        }

        // 3. Sort by price
        result.sort((a, b) => {
            if (sortOrder === 'asc') return a.price - b.price;
            return b.price - a.price;
        });

        setFilteredSkills(result);
    }, [skills, sortOrder, minPrice, maxPrice, minRating]);

    if (!skills) return <Spinner />;

    // Helper component for styled input fields
    const FilterInput = ({ icon: Icon, placeholder, value, onChange, min, max }) => (
        <div className="relative mb-3">
            <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
                type="number"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="border border-gray-300 rounded-lg p-2 pl-9 w-full text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                min={min}
                max={max}
            />
        </div>
    );

    // Sidebar Content Component
    const Sidebar = () => (
        <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-100 lg:sticky lg:top-8">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
                <FaFilter className="mr-2 text-amber-500" /> Filter & Sort
            </h2>

            {/* Price Filter */}
            <div className="mb-6 pb-4 border-b border-gray-100">
                <h3 className="font-semibold text-lg text-gray-700 mb-2 flex items-center">
                    <FaDollarSign className="mr-2 text-green-500" /> Price Range
                </h3>
                <FilterInput
                    icon={FaDollarSign}
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
                <FilterInput
                    icon={FaDollarSign}
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
            </div>

            {/* Rating Filter */}
            <div className="mb-6 pb-4 border-b border-gray-100">
                <h3 className="font-semibold text-lg text-gray-700 mb-2 flex items-center">
                    <FaStar className="mr-2 text-yellow-500" /> Minimum Rating
                </h3>
                <FilterInput
                    icon={FaStar}
                    placeholder="Min Rating (0-5)"
                    value={minRating}
                    onChange={(e) => setMinRating(e.target.value)}
                    min={0}
                    max={5}
                />
            </div>

            {/* Sort Order */}
            <div className="mb-4">
                <h3 className="font-semibold text-lg text-gray-700 mb-2 flex items-center">
                    <FaSortAmountDown className="mr-2 text-blue-500" /> Sort By Price
                </h3>
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 w-full appearance-none bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition text-sm"
                >
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>
            </div>

            {/* Clear Filters Button */}
            <button
                onClick={() => {
                    setMinPrice('');
                    setMaxPrice('');
                    setMinRating('');
                    setSortOrder('asc');
                }}
                className="w-full mt-4 py-2 text-sm font-semibold bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
                Clear Filters
            </button>
        </div>
    );


    return (
        <div className=" py-8  sm:px-6 w-19/20 mx-auto max-w-full">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-8 border-b pb-4">
                Explore Available Sessions
            </h1>

            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
                <button
                    onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
                    className="w-full py-3 bg-amber-500 text-white font-bold rounded-lg flex items-center justify-center shadow-md hover:bg-amber-600 transition"
                >
                    <FaFilter className="mr-2" />
                    {isFilterPanelOpen ? 'Hide Filters' : 'Show Filters'}
                </button>
            </div>

            {/* Main Content Grid: Sidebar (1 column) and Skills Grid (3 columns) */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* 1. Sidebar for Filtering & Sorting (Hidden on mobile by default) */}
                <div className={`lg:col-span-1 ${isFilterPanelOpen ? 'block' : 'hidden'} lg:block`}>
                    <Sidebar />
                </div>

                {/* 2. Skills Grid */}
                <div className="lg:col-span-3">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">
                        Showing {filteredSkills.length} results
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredSkills.length > 0 ? (
                            filteredSkills.map(skill => (
                                <SkillsCard key={skill.skillId} skill={skill} />
                            ))
                        ) : (
                            <p className="text-gray-500 text-center col-span-full py-12 text-lg">
                                No sessions match your current filter and sort criteria.
                            </p>
                        )}
                    </div>

                    {/* Go Back Button (Cleanly integrated) */}
                    <div className="text-center pt-12">
                        <Link to='/' className="inline-flex items-center">
                            <button className="py-3 px-6 bg-slate-700 text-white font-bold rounded-xl text-lg hover:bg-slate-900 transition shadow-lg">
                                <FaArrowLeft className="inline mr-3" /> Go back to Home
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;