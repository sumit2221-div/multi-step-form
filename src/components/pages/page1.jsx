import React, { useState } from 'react';
import student from "../../assets/student.webp";
import OptionField from '../option';
import professor from "../../assets/professor.jpg";
import parent from "../../assets/parent.avif";
import lifelong from "../../assets/lifelong.webp";
import teacher from '../../assets/teacher.webp';
import other from "../../assets/other.avif";

function Page1() {
    const [selectedOption, setSelectedOption] = useState(null);

    const option = [
        {
            text: 'student ',
            src: student,
            additionalText: ' or soon to be enrolled '
        },
        {
            text: 'professor ',
            src: professor,
            additionalText: 'pursuing a career'
        },
        {
            text: 'parent ',
            src: parent,
            additionalText: 'of a school-age child'
        },
        {
            text: 'lifelong learner',
            src: lifelong
        },
        {
            text: 'teacher',
            src: teacher
        },
        {
            text: 'other',
            src: other
        }
    ];

    const handleOptionSelect = (index) => {
        setSelectedOption(index);
    };

    return (
        <div className="container mx-auto max-h-auto ">
            <div className="max-w-[700px] mx-auto white rounded-lg  text-center items-center ">
                <h2 className="mb-4 text-2xl font-semibold">Which describes you best?</h2>
                <p className="mx-auto mb-4 text-gray-500">This will help us personalize your experience.</p>
                {option.map((option, index) => (
                    <div key={index}>
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
    );
}

export default Page1;
