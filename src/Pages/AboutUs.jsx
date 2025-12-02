import React from 'react';

const AboutUs = () => {
    return (
        <div className=" min-h-screen ">
            <section className="py-20 px-4 rounded-lg bg-gradient-to-r from-slate-500 to-amber-200 w-11/12 mx-auto max-w-full">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl font-extrabold text-white mb-4"><span className='text-amber-400'>About</span> <span className='text-slate-700'>SkillSwap</span></h1>
                    <p className="text-lg text-base-300">
                        SkillSwap is a platform where you can teach what you know and learn what you love.
                        We connect people to exchange skills in a fun, flexible, and seamless way.
                        Whether you want to improve your coding skills, learn a new language, or master a musical instrument,
                        SkillSwap allows you to find the perfect learning partner.
                        Our goal is to create a community where knowledge flows freely, talents are shared, and connections are made.
                        Every interaction is designed to be simple, engaging, and rewarding — making learning a social and enjoyable experience.
                        Join us today and start exchanging your skills with people who are as passionate about learning as you are!
                    </p>
                </div>
            </section>
            <section className="py-16   w-11/12 mx-auto max-w-full ">
                <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Our Mission & Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                        <h3 className="text-xl font-semibold text-amber-400 mb-2">Mission</h3>
                        <p className="text-gray-700">
                            Empower people to learn new skills and share knowledge in a collaborative community.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                        <h3 className="text-xl font-semibold text-amber-400 mb-2">Vision</h3>
                        <p className="text-gray-700">
                            Create a world where learning is accessible, social, and fun for everyone.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                        <h3 className="text-xl font-semibold text-amber-400 mb-2">Values</h3>
                        <p className="text-gray-700">
                            Trust, Collaboration, Growth, Innovation, and Respect guide everything we do.
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-16">
                <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Meet Our Team</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 w-11/12 mx-auto max-w-full  ">
                    {[
                        { name: "Homayra Heme", role: "Founder & CEO", avatar: "  https://randomuser.me/api/portraits/women/76.jpg" },
                        { name: "Hafsa Hina", role: "Lead Developer", avatar: " https://randomuser.me/api/portraits/women/73.jpg" },
                        { name: "Hadib Hossain", role: "Marketing Head", avatar: "  https://randomuser.me/api/portraits/men/76.jpg" },
                        { name: "Nadia Rahman", role: "Community Manager", avatar: "  https://randomuser.me/api/portraits/women/75.jpg" },
                    ].map((member, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-md p-6 text-center flex flex-col items-center">
                            <img className="w-24 h-24 rounded-full mb-4" src={member.avatar} alt={member.name} />
                            <h4 className="font-bold text-gray-800">{member.name}</h4>
                            <p className="text-amber-400 text-sm">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
