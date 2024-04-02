import React from 'react';
import robot from "../../assets/robot.webp"

function Page3() {
    return (
        <div className="flex justify-center items-center mx-auto mt-10">
            <div className="w-1/2 lg:w-1/3 mx-4">
                {/* First Responsive Div */}
                <div className=" p-4 rounded-lg ">
                    <img  className="shadow-inner" src={robot}/>
                   
                </div>
            </div>
            <div className="w-1/2 lg:w-1/3 mx-4">
                {/* Second Responsive Div */}
                <div className=" p-4 rounded-lg">
                    <h2 className="text-3xl font-semibold mb-2">you're in the right place</h2>
                    <p>Brilliant gets you hands-on to help improve your professional
                        skills and knowledge. you'll intract with concepts and solve
                         fun problems in math. science, and computer science
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Page3;
