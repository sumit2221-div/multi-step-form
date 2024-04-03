import React from 'react';
import cartoon from "../../assets/cartoon.jpg"

function Page5() {
    return (
        <div className="flex items-center justify-center mx-auto max-w-[800px] ">
            <div className="w-1/3 mx-2 lg:w-1/3">
                {/* First Responsive Div */}
                <div className="p-4 rounded-lg ">
                    <img className="shadow-inner" src={cartoon}/>
                </div>
            </div>
            <div className="w-1/2 mx-2 lg:w-1/2">
                {/* Second Responsive Div */}
                <div className="p-4 rounded-lg ">
                    <h2 className="mb-2 text-3xl font-semibold">you're on your way!</h2>
                    <h2 className='text-3xl text-yellow-400'>★★★★★</h2>
                    <p> "through its engaging and well structured courses. Brilliant has taught me
                        mathematical concept that previously struggled to understand . i now feel
                        confident approaching both technical job interviews and real world problem 
                        solving situations."
                    </p>
                    <h6> -- Jacob S.</h6>
                </div>
            </div>
        </div>
    );
}

export default Page5;
