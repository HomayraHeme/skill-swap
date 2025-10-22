import React from "react";
import { Link } from "react-router";
import logoImg from '../assets/SkillSwapLogo.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-gray-100 bg-gray-700 py-8">
            <div className="grid grid-cols-1 place-items-center pb-10">
                <img className='w-12 h-12 rounded-full' src={logoImg} alt="" />
                <a className="text-3xl font-bold text-yellow-400 pl-3">SkillSwap</a>
            </div>
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">

                {/* Contact Info */}
                <div>
                    <h2 className="font-bold text-lg mb-2">Contact Us</h2>
                    <p>Email: info@skillswap.com</p>
                    <p>Phone: +880 1234 567890</p>
                    <p>Address: Dhaka, Bangladesh</p>
                </div>

                {/* Social Links */}
                <div>
                    <h2 className="font-bold text-lg mb-2">Follow Us</h2>
                    <div className="flex gap-4 mt-2">
                        <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
                        <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
                        <a href="#" className="hover:text-pink-600"><FaInstagram /></a>
                        <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
                    </div>
                </div>

                {/* Privacy Policy */}
                <div>
                    <h2 className="font-bold text-lg mb-2">Legal</h2>
                    <ul>
                        <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
                    </ul>
                </div>

            </div>

            <div className="text-center mt-6 text-sm text-gray-300">
                &copy; 2025 SkillSwap. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
