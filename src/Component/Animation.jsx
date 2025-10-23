import React from 'react';
import "animate.css";
import ErrorPage from '../Pages/ErrorPage';

const AnimationLoad = ({ children }) => {
    return (
        <div>


            <div className="animate__animated  animate__rubberBand   ">
                {children}

            </div>
        </div>
    );
};

export default AnimationLoad;