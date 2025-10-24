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
    const popularSkill = skill.slice(0, 9)
    return (
        <div>
            <Banner></Banner>
            <main className='w-11/12 mx-auto my-3  grid md:grid-cols-12 items-start pt-20  grid-cols-1'>
                <div className="main px-5  col-span-8">
                    <div>
                        <p className='font-bold text-2xl text-center'>Popular skills</p>
                    </div>


                    <div className='grid grid-cols-1 items-center place-items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-12'>
                        {popularSkill.map(skill => (<SkillsCard skill={skill}></SkillsCard>))}
                    </div>

                    <div className='text-center'>
                        <button className='btn   text-white p-2 px-5 rounded-[5px] hover:bg-amber-600 bg-amber-400 font-bold'><Link to='/skills'>Show All</Link></button>
                    </div>
                </div>
                <aside className='col-span-3 sticky top-0 h-fit flex flex-col justify-center items-center md:items-start   '>

                    <div className='pt-20'>
                        <TopRatedProvider></TopRatedProvider>
                    </div>
                    <div className='pt-5'>
                        <WorkDetails></WorkDetails>
                    </div>

                </aside>

            </main>
            <AnimationLoad> <Testimonial></Testimonial></AnimationLoad>

        </div >
    );
};

export default HomeLayouts;