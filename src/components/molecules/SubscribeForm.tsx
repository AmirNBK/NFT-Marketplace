import React from 'react';
import email from '@/assets/icons/Email.svg'
import Image from 'next/image';
import localFont from 'next/font/local'
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })

const SubscribeForm = ({ placeholder, bgColor, hasIcon }: { placeholder: string, bgColor: string, hasIcon: boolean }) => {
    return (
        <div className={` ${WorkSansRegular.className} SubscribeForm relative w-[95%]`}>
            <input placeholder={placeholder} className='rounded-2xl outline-none bg-white text-[#2B2B2B] placeholder:text-[#2B2B2B]  w-full
            xl:py-5 py-3 px-4 ' />
            <button
                style={{ backgroundColor: `${bgColor}` }}
                className={`xl:flex hidden rounded-2xl flex-row-reverse items-center py-5 px-10 gap-3 absolute right-0 top-0`}>
                <p className={`${WorkSans.className}`}>
                    Subscribe
                </p>
                {hasIcon && <Image src={email} alt='email icon' />}
            </button>

            <button
                className='xl:hidden flex flex-row-reverse items-center justify-center gap-4 rounded-2xl w-full py-3 px-4 mt-4'
                style={{ backgroundColor: `${bgColor}` }}>
                <p>
                    Subscribe
                </p>
                {hasIcon && <Image src={email} alt='email icon' />}
            </button>
        </div>
    );
};

export default SubscribeForm;