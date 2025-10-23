import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function App() {
    return (

        <>
            <Swiper
                effect={'flip'}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation, Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: true }}
                className="mySwiper w-60 md:w-80 h-50 md:h-80"
                loop={true}
            >
                <SwiperSlide>
                    <img className='w-60 md:w-80 h-50 md:h-80 rounded-2xl' src="https://img.freepik.com/free-vector/teamwork-concept_23-2147853996.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-60 md:w-80 h-50 md:h-80 rounded-2xl' src="https://img.freepik.com/free-vector/people-connecting-puzzle-pieces-illustration_23-2148075941.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-60 md:w-80 h-50 md:h-80 rounded-2xl' src=" https://img.freepik.com/free-vector/team-sharing-make-graphic-design_23-2148102380.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-60 md:w-80 h-50 md:h-80 rounded-2xl' src=" https://img.freepik.com/free-vector/worldwide-connection_53876-90449.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-60 md:w-80 h-50 md:h-80 rounded-2xl' src="https://img.freepik.com/free-vector/business-leader-standing-arrow-holding-flag-flat-vector-illustration-cartoon-people-training-doing-business-plan-leadership-victory-challenge-concept_74855-9812.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-60 md:w-80 h-50 md:h-80 rounded-2xl' src="https://img.freepik.com/premium-vector/boy-studying-with-laptop-online-learning-education-vector-illustration_7087-1886.jpg" />
                </SwiperSlide>

            </Swiper>
        </>
    );
}
