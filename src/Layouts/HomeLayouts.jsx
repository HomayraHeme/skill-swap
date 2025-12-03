import React from 'react';
import Hero from '../Component/Hero';
// import Skills from '../Pages/Skills';
import TopRatedProvider from '../Component/TopRatedProvider';
import WorkDetails from '../Component/WorkDetails';
import Banner from '../Pages/Banner';
import SkillsCard from '../Pages/SkillsCard';
import { Link, useLoaderData } from 'react-router';
import Testimonial from '../Pages/Testimonial';
import AnimationLoad from '../Component/Animation';

const HomeLayouts = () => {
    const skill = useLoaderData();
    const popularSkill = skill.slice(0, 8);

    return (
        <div>
            <Banner></Banner>
            <div className='w-11/12 mx-auto max-w-full mb-3 pt-5 grid md:grid-cols-12 grid-cols-1 gap-6'>

                <div className='col-span-8 relative'>
                    <div className='sticky top-24'>
                        <p className='font-bold text-3xl text-center text-slate-700'>Popular skills</p>

                        <div className='grid grid-cols-1 items-center place-items-center justify-center md:grid-cols-3 lg:grid-cols-4 gap-6 py-12'>
                            {popularSkill.map(skill => (
                                <SkillsCard key={skill.skillId} skill={skill}></SkillsCard>
                            ))}
                        </div>

                        <div className='text-center'>
                            <button className='btn btn-outline text-white  outline-white rounded-[5px] hover:bg-amber-600 bg-amber-400 font-bold px-8'>
                                <Link to='/Skills'>Show All</Link>
                            </button>
                        </div>
                    </div>
                </div>

                <aside className='col-span-3 md:px-10  lg:pl-14 h-fit flex flex-col justify-center items-center md:items-start'>
                    <div className='sticky top-24 w-full md:w-20'>
                        <div className='pt-10 '>
                            <TopRatedProvider></TopRatedProvider>
                        </div>
                        <div className='pt-5'>
                            <WorkDetails></WorkDetails>
                        </div>
                    </div>
                </aside>
            </div>

            <AnimationLoad>
                <Testimonial></Testimonial>
            </AnimationLoad>
        </div>
    );
};

export default HomeLayouts;
