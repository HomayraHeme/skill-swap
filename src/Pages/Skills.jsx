import React from 'react';
import { Link, useLoaderData } from 'react-router';
import SkillsCard from './SkillsCard';

const Skills = () => {
    const skills = useLoaderData();
    // console.log(skills);

    return (
        <div>
            <div className="grid grid-cols-1 place-items-center md:grid-cols-3 lg:grid-cols-5 pl-5 gap-4">
                {skills.map(skill => (
                    <SkillsCard key={skill.skillId} skill={skill} />
                ))}
            </div>
            <div className='text-center py-10'>
                <Link to='/'><button className='btn bg-amber-400 text-white font-bold text-2xl hover:bg-amber-600 
                '>Go back to home</button></Link>
            </div>
        </div>


    );
};

export default Skills;
