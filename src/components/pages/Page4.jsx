import React, { useState } from 'react';
import intro from "../../assets/image.jpeg";
import basic from "../../assets/basic.jpeg";
import inter from "../../assets/inter.jpeg";
import advance from "../../assets/advance.jpeg";

function Page4() {
    const [selectedOption, setSelectedOption] = useState(null);

    const option =  [
        {
            text : 'arithmetic',
            src : intro,
            additionalText: 'introductory'
        },
        {
            text : 'Basic algebra',
            src : basic,
            additionalText :' Foundational'
        },
        {
            text : 'intermediate algebra',
            src : inter,
            additionalText : 'Intermediate'
        },
        {
            text : 'calculus',
            src : advance,
            additionalText :' advanced'
        },
    ];

    return (
        <div>
            <div className="container mx-auto min-h-[150px] max-h-[500px] mt-10">
                <div className="max-w-[1000px] mx-auto white p-6 rounded-lg text-center max-h-700">
                    <h2 className="mb-4 text-2xl font-semibold lg:text-3xl">What is your math comfort level?</h2>
                    <p className="mb-4 text-sm text-gray-500 lg:text-base">Choose the highest level you feel comfortable in - you can always adjust later</p>
                    <div className="flex justify-center mt-20">
                        {option.map((option, index) => (
                            <div 
                                key={index} 
                                className={`mx-2 shadow-xl rounded-xl ${selectedOption === index ? 'ring-2 ring-yellow-400' : 'hover:ring-2 hover:ring-orange-400'}`}
                                onClick={() => setSelectedOption(index)}
                            >
                                <img src={option.src} alt={option.text} className="hidden h-auto max-w-full sm:block" />
                                <p className="text-lg lg:text-xl">{option.text}</p>
                                <p className="hidden text-sm sm:block">{option.additionalText}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page4;
