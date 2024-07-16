import Image, { StaticImageData } from 'next/image';
import React from 'react';

const PrimaryButton = ({ text, icon }: { text: string, icon: StaticImageData }) => {
    return (
        <button className='bg-[#A259FF] flex flex-row-reverse gap-3 px-8 py-4 rounded-2xl items-center w-fit'>
            <p> {text} </p>
            <Image src={icon} alt='icon' />
        </button>
    );
};

export default PrimaryButton;