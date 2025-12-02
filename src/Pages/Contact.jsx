import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        toast.success("Message sent! We'll get back to you soon.");
        setForm({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className=" min-h-screen pb-8 ">
            <div className="w-11/12 mx-auto max-w-full bg-slate-200 rounded-2xl py-8">
                <h2 className="text-4xl  font-extrabold text-center text-slate-700 mb-12">
                    <span className="text-amber-400">Contact</span> Us
                </h2>

                <div className="grid md:grid-cols-2 gap-12 px-16">
                    {/* Contact Info */}
                    <div className="space-y-6 ">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-800">Email</h3>
                            <p className="text-gray-700">support@skillswap.com</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-slate-800">Phone</h3>
                            <p className="text-gray-700">+880 1234 567890</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-slate-800">Address</h3>
                            <p className="text-gray-700">123 SkillSwap Street, Dhaka, Bangladesh</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-slate-800">Follow Us</h3>
                            <p className="text-gray-700">

                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition duration-200">Facebook</a>|
                                <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">Twitter</a>|
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition duration-200">Instagram</a>|
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-200">LinkedIn</a>

                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-6 space-y-4 ">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                            required
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={form.subject}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                            rows={5}
                            required
                        />
                        <button
                            type="submit"
                            className="w-full py-3 bg-amber-400 text-white font-bold rounded-lg hover:bg-amber-500 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
