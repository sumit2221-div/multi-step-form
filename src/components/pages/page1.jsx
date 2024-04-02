import React from 'react';
import student from "../../assets/student.webp"
import OptionField from '../option';
import professor from "../../assets/professor.jpg"
import parent from "../../assets/parent.avif"
import lifelong from "../../assets/lifelong.webp"
import teacher from '../../assets/teacher.webp'
import other from "../../assets/other.avif"

function Page1() {

    const option =  [
        {
            text : 'student ',
            src : student,
           additionalText:' or soon to be enrolled '
        
        },
        {
           text : 'professor ',
            src : professor,
            additionalText : 'persuing a carrer'
        },
        {
            text : 'parent ',
            src : parent,
            additionalText : 'of a school-age child'
        },
        {
            text : 'lifelong learner',
            src : lifelong
        },
        {
            text: 'teacher',
            src : teacher
        },
        {
            text : 'other',
            src : other
        }
    ];

    return (
        <div className="container h-auto  ">
            <div className="max-w-[700px] mx-auto white p-6 rounded-lg  text-center items-center ">
                <h2 className="text-2xl font-semibold mb-4">Which describes you best?</h2>
                <p className="text-gray-500 mb-4">This will help us personalize your experience.</p>
                {option.map((option, index) => (
                    <div key={index} >
                        <OptionField src={option.src} text={option.text} additionalText={option.additionalText} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page1;
