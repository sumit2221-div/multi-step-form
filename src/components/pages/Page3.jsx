import React from 'react';
import robot from "../../assets/robot.webp"

function Page3() {
    return (
        <div className="flex items-center justify-center mx-auto">
            <div className="flex flex-row  w-full max-w-[900px] mx-4">
                <div className="mx-4 lg-w-1/3">
                    {/* First Responsive Div */}
                    <div className="p-4 rounded-lg">
                        <img className=" min-h-[200px]  min-w-[100px] mshadow-inner " src={robot} alt="Robot"/>
                    </div>
                </div>
                <div className="mx-4 overflow-hidden lg:w-1/2">
                    {/* Second Responsive Div */}
                    <div className="p-4 rounded-lg">
                        <h2 className="mt-10 mb-2 text-3xl font-semibold">You're in the right place</h2>
                        <p>Brilliant gets you hands-on to help improve your professional
                            skills and knowledge. You'll interact with concepts and solve
                            fun problems in math, science, and computer science.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page3;
