import Image, { StaticImageData } from 'next/image';
import React from 'react';
import localFont from 'next/font/local'
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })

const HowItWorksCard = ({ image, title, description }: { image: StaticImageData, title: string, description: string }) => {
    return (
        <div className='rounded-2xl bg-[#3B3B3B] flex sm:flex-col flex-row items-center text-center sm:gap-3 gap-4 sm:w-11/12 w-full lg:px-8 px-3 py-5'>
            <Image src={image} alt='image' unoptimized className='w-28' />

            <div className='flex flex-col gap-2 items-start'>
                <h2 className={`${WorkSans.className} lg:text-xl text-lg`}>
                    {title}
                </h2>
                <p className={`${WorkSansRegular.className} lg:text-base text-sm sm:text-center text-left`}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default HowItWorksCard;