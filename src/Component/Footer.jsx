import React from "react";
import { Link } from "react-router";
import logoImg from '../assets/SkillSwapLogo.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="text-gray-100 bg-gray-700 py-6">

            {/* --- লোগো এবং নাম (মাঝখানে থাকবে) --- */}
            <div className="grid grid-cols-1 place-items-center pb-6 border-b border-gray-600/50">
                <img className='w-14 h-14 rounded-full mb-1' src={logoImg} alt="SkillSwap Logo" />
                <h1 className="text-3xl font-extrabold text-yellow-400">SkillSwap</h1>
            </div>

            {/* --- মূল ফুটার কন্টেন্ট (মাঝখানে থাকবে) --- */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 text-center">

                {/* ১. কন্ট্যাক্ট/যোগাযোগ */}
                <div className>
                    <h2 className="font-bold text-lg mb-2 text-yellow-400">Contact Us</h2>
                    <div className="space-y-1 text-sm">
                        <p>Email: <a href="mailto:support@skillswap.com" className="hover:text-yellow-300">support@skillswap.com</a></p>
                        <p>Phone: +880 1234 567890</p>
                        <p>Address: 123 SkillSwap Street, Dhaka, Bangladesh</p>
                    </div>
                </div>

                {/* ২. কুইক লিঙ্কস */}
                <div className>
                    <h2 className="font-bold text-lg mb-2 text-yellow-400">Quick Links</h2>
                    <ul className="space-y-1 text-sm">
                        <li><Link to="/" className="hover:underline hover:text-yellow-300">Home</Link></li>
                        <li><Link to="/all-skills" className="hover:underline hover:text-yellow-300">All Skills</Link></li>
                        <li><Link to="/my-profile" className="hover:underline hover:text-yellow-300">My Profile</Link></li>
                        <li><Link to="/about-us" className="hover:underline hover:text-yellow-300">About Us</Link></li>
                        <li><Link to="/contact" className="hover:underline hover:text-yellow-300">Contact</Link></li>
                    </ul>
                </div>

                {/* ৩. ফলো করুন/সোশ্যাল মিডিয়া */}
                <div className>
                    <h2 className="font-bold text-lg mb-2 text-yellow-400">Follow Us</h2>
                    <div className="flex gap-3 text-xl mt-1 justify-center">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition duration-200"><FaFacebookF /></a>
                        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200"><FaXTwitter /></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition duration-200"><FaInstagram /></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-200"><FaLinkedinIn /></a>
                    </div>
                </div>

            </div>

            {/* --- কপিরাইট (মাঝখানে থাকবে) --- */}
            <div className="text-center mt-4 pt-4 border-t border-gray-600/50 text-sm text-gray-400">
                &copy; 2025 SkillSwap. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;