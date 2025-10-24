import React from "react";
import "animate.css";

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-96">
            <div className="animate__animated  animate__rotateIn animate__infinite">
                <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full"></div>
            </div>
        </div>
    );
};

export default Spinner;
