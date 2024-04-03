import React from 'react'
import growth from "../../assets/growth.webp"
import OptionField from '../option';
import explore from "../../assets/explore.webp"
import refresh from "../../assets/refresh.webp"
import brain from "../../assets/brain.webp"
import something from "../../assets/something.webp"
import { useState } from 'react';

function Page2() {
    const [selectedOption, setSelectedOption] = useState(null);
    const option =  [
        {
            text : 'learning specific skill to advance my career',
            src : growth
        },
        {
            text : 'exploring new topics i am intrested in',
            src : explore
        },
        {
            text : 'refreshing my math foundations',
            src : refresh
        },
        {
            text : 'exercising my brain to stay sharp',
            src : brain
        },
        {
            text : 'something else',
            src : something
        }
       
        
    ];
    const handleOptionSelect = (index) => {
        setSelectedOption(index);
    };
  return (
    <div>
          <div className="container mx-auto ">
            <div className="max-w-[700px] mx-auto white p-6 rounded-lg  text-center">
                <h2 className="mb-4 text-2xl font-semibold">Which are you most intrested in?</h2>
                <p className="mb-4 text-gray-500">choose just one. this will help us to get you started(but will not limit your exprience)</p>
                {option.map((option, index) => (
                    <div key={index} className="">
                         <OptionField
                       src={option.src}
                     text={option.text}
                    additionalText={option.additionalText}
                  onClick={() => handleOptionSelect(index)}
                  style={{ backgroundColor: selectedOption === index ? "green" : "white" }} 
/>
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default Page2
