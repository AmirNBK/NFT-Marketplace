import Image, { StaticImageData } from 'next/image';
import React from 'react';
import localFont from 'next/font/local'
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })

const HowItWorksCard = ({ image, title, description }: { image: StaticImageData, title: string, description: string }) => {
    return (
        <div className='rounded-2xl bg-[#3B3B3B] flex flex-col items-center text-center gap-3 w-11/12 px-8 py-5'>
            <Image src={image} alt='image' unoptimized />
            <h2 className={`${WorkSans.className} text-xl`}>
                {title}
            </h2>
            <p className={`${WorkSansRegular.className} text-base`}>
                {description}
            </p>
        </div>
    );
};

export default HowItWorksCard;