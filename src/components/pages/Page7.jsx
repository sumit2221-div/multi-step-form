import React from 'react';
import math from "../../assets/math.jpg"

function Page7() {
    return (
        <div className='mx-auto container mt-10 h-[500px]'>
            <h1 className="mb-4 text-2xl font-semibold text-center">Learning path based on your answers</h1>
            <p className='mb-4 font-semibold text-center text-slate-500'>Choose one to get started. You can switch anytime.</p>
            <div className="flex flex-col gap-8 mt-10 sm:flex-row">
                <div className="flex flex-row justify-between relative w-full p-4 duration-300 scale-105 rounded-lg sm:w-1/2 hover:bg-gray-300 ring-2 min-w-[100px] ">
                
                    <div className='absolute top-0 left-0 z-10 flex items-center justify-center text-black bg-yellow-600 h-[20px] rounded-xl w-[150px] '>most popular</div>
                    
                    <div>
                        <h2 className="text-lg font-semibold">Foundation math</h2>
                        <p>Build your foundation skills on algebra, geometry, and probability.</p>
                    </div>
                    <img className="hidden sm:block mx-auto h-auto max-w-[200px]" src={math} alt="Math"/>
                </div>
                <div className="flex flex-row justify-between w-full p-4 duration-300 scale-105 rounded-lg sm:w-1/2 hover:bg-gray-300 ring-2 ">
                    <div>
                        <h2 className="text-lg font-semibold">Mathematical Thinking</h2>
                        <p>Build your foundation skills on algebra, geometry, and probability.</p>
                    </div>
                    <img className="hidden sm:block mx-auto h-auto max-w-[200px]" src={math} alt="Math"/>
                </div>
            </div>
        </div>
    );
}

export default Page7;
