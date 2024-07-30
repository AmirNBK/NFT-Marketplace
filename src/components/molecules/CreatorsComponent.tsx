import Image, { StaticImageData } from 'next/image';
import React from 'react';
import localFont from 'next/font/local'
const spaceMono = localFont({ src: '../../assets/fonts/SpaceMono-Regular.ttf' })
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })

const CreatorsComponent = ({ index, avatar, name, sales }: { index: number, avatar: StaticImageData, name: string, sales: string | number }) => {
    return (
        <div className='CreatorsComponent cursor-pointer relative  rounded-2xl py-6 bg-[#3B3B3B] flex flex-col items-center text-center gap-2 text-white'>
            <div className={`${spaceMono.className} rounded-full flex flex-col items-center
             text-center justify-center absolute left-6 top-5 bg-[#2B2B2B] size-8 text-[#858584]`}>
                {index}
            </div>
            <Image unoptimized src={avatar} alt='avatar' className='rounded-full w-1/2' />
            <p className={`${WorkSans.className} text-xl mt-4`}>
                {name}
            </p>
            <div className='flex flex-row gap-1 text-base'>
                <p className='text-[#858584]'>
                    Total Sales:
                </p>
                <p className={`${spaceMono.className}`}>
                    {sales} ETH
                </p>
            </div>
        </div>
    );
};

export default CreatorsComponent;