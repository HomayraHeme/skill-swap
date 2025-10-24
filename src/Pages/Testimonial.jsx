import React from 'react';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            quote: "I learned advanced coding and in return taught guitar. SkillSwap made the exchange seamless and fun!",
            name: "Rajiv Menon",
            skill: "Learned: Full Stack Coding",
            avatar: "https://i.pravatar.cc/150?img=1"
        },
        {
            id: 2,
            quote: "Finding a flexible learning partner for Spanish was easy. The platform's system ensured high quality teaching. Highly recommended!",
            name: "Priya Sen",
            skill: "Taught: Conversational Spanish",
            avatar: "https://i.pravatar.cc/150?img=2"
        },
        {
            id: 3,
            quote: "I finally found someone who needed graphic design help in exchange for photography lessons! The perfect win-win platform.",
            name: "Kabir Hossain",
            skill: "Exchanged: Design for Photo",
            avatar: "https://i.pravatar.cc/150?img=3"
        },
        {
            id: 4,
            quote: "Swapping my marketing expertise for baking lessons was the best decision! Got a new skill and made a great connection.",
            name: "Sofia Ali",
            skill: "Exchanged: Marketing for Baking",
            avatar: "https://i.pravatar.cc/150?img=4"
        }
    ];
    return (
        <div>
            <section className="testimonials-section py-16 px-4 bg-base-300">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
                        <span className='text-amber-400'>Success Stories</span>: <span className='text-slate-700'>Hear From Our Community</span>
                    </h2>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {testimonials.map(testi => (
                            <div key={testi.id} className="card  bg-slate-300 shadow-xl   p-4">
                                <div className="card-body p-0">

                                    <p className="text-5xl font-serif text-amber-400 opacity-20 mb-2 leading-none">❝</p>


                                    <p className="text-sm text-gray-700 italic mb-4">"{testi.quote}"</p>


                                    <div className="flex items-center mt-3">
                                        <div className="avatar mr-3">
                                            <div className="w-10 rounded-full ring ring-amber-500 ring-offset-base-100 ring-offset-2">
                                                <img src={testi.avatar} alt={`Avatar of ${testi.name}`} />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-md font-bold text-gray-800">{testi.name}</h4>
                                            <p className="text-xs text-amber-400">{testi.skill}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>
        </div>
    );
};

export default Testimonial;