import React from 'react'
import growth from "../../assets/growth.webp"
import OptionField from '../option';
import explore from "../../assets/explore.webp"
import refresh from "../../assets/refresh.webp"
import brain from "../../assets/brain.webp"
import something from "../../assets/something.webp"

function Page2() {
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
  return (
    <div>
          <div className="container mx-auto px-10 py-10  ">
            <div className="max-w-[700px] mx-auto white p-6 rounded-lg  text-center">
                <h2 className="text-2xl font-semibold mb-4">Which are you most intrested in?</h2>
                <p className="text-gray-500 mb-4">choose just one. this will help us to get you started(but will not limit your exprience)</p>
                {option.map((option, index) => (
                    <div key={index} className="">
                        <OptionField src={option.src} text={option.text} additionalText={option.additionalText} />
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default Page2
