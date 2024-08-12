import React from 'react';
import email from '@/assets/icons/Email.svg'
import Image from 'next/image';
import localFont from 'next/font/local'
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })

const SubscribeForm = ({ placeholder, bgColor }: { placeholder: string, bgColor: string }) => {
    return (
        <div className={` ${WorkSansRegular.className} SubscribeForm relative w-[95%]`}>
            <input placeholder={placeholder} className='rounded-2xl bg-white text-[#2B2B2B] placeholder:text-[#2B2B2B]  w-full
            py-5 px-4 ' />
            <button className={`bg-[${bgColor}]  rounded-2xl flex flex-row-reverse items-center py-5 px-10 gap-3 absolute right-0 top-0`}>
                <p className={`${WorkSans.className}`}>
                    Subscribe
                </p>
                <Image src={email} alt='email icon' />
            </button>
        </div>
    );
};

export default SubscribeForm;