import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';

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
        },
        {
            id: 5,
            quote: "I traded my web development knowledge for yoga sessions — it’s amazing how balanced my routine feels now!",
            name: "Arjun Patel",
            skill: "Exchanged: Coding for Yoga",
            avatar: "https://i.pravatar.cc/150?img=5"
        },
        {
            id: 6,
            quote: "SkillSwap connected me to people from all over the world — I taught music and learned French in return!I love it",
            name: "Nadia Rahman",
            skill: "Exchanged: Music for French",
            avatar: "https://i.pravatar.cc/150?img=6"
        }
    ];

    return (
        <section className="testimonials-section py-16 px-4 bg-base-300">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
                    <span className="text-amber-400">Success Stories</span>:{" "}
                    <span className="text-slate-700">Hear From Our Community</span>
                </h2>


                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[Autoplay, Pagination]}
                >
                    {testimonials.map((testi) => (
                        <SwiperSlide key={testi.id}>
                            <div className="h-full">
                                <div className="card bg-slate-300 shadow-xl p-5 h-full flex flex-col justify-between">
                                    <div>
                                        <p className="text-5xl font-serif text-amber-400 opacity-20 mb-2 leading-none">❝</p>
                                        <p className="text-sm text-gray-700 italic mb-4 line-clamp-5">
                                            "{testi.quote}"
                                        </p>
                                    </div>

                                    <div className="flex items-center mt-auto">
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;
