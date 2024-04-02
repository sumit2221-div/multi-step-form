import React from 'react';
import intro from "../../assets/image.jpeg";
import basic from "../../assets/basic.jpeg";
import inter from "../../assets/inter.jpeg";
import advance from "../../assets/advance.jpeg";

function Page4() {
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
            <div className="container px-10 py-10 mx-auto">
                <div className="max-w-[1000px] mx-auto white p-6 rounded-lg text-center">
                    <h2 className="mb-4 text-2xl font-semibold lg:text-3xl">What is your math comfort level?</h2>
                    <p className="mb-4 text-sm text-gray-500 lg:text-base">Choose the highest level you feel comfortable in - you can always adjust later</p>
                    <div className="flex justify-center ">
                        {option.map((option, index) => (
                            <div key={index} className="mx-2 shadow-xl hover:ring-2 rounded-xl hover:ring-orange-400 ">
                                <img src={option.src} alt={option.text} className="h-auto max-w-full" />
                                <p className="text-lg lg:text-xl">{option.text}</p>
                                <p className="text-sm">{option.additionalText}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page4;
