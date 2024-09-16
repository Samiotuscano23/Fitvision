import React from 'react';

import { poseInstructions } from '../data';
import { poseImages } from '../utils/pose_images';

export default function Instructions({ currentPose }) {

    const instructions = poseInstructions;

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center md:mx-10 py-2 px-10">
            <div className='flex-col w-auto'>
                <div className='bg-[#22c9ef] rounded-lg p-3'>{currentPose}
                </div>
                <ul className="mt-2 p-[10px] rounded-lg bg-white flex-col justify-center items-center">
                    {instructions[currentPose].map((instruction, index) => {
                        return (
                            <li className="m-[10px] tracking-wide text-black font-normal mt-[20px]" key={index}>{instruction}</li>
                        )

                    })}
                </ul>
            </div>
            <img
                className="lg:h-[400px] lg:aspect-square sm:h-auto sm:w-[350px] rounded-lg m-4"
                src={poseImages[currentPose]}
                alt={`${currentPose}`}
            />
        </div>
    )
}
