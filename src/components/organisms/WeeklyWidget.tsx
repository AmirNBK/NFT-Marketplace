import Image from 'next/image';
import React from 'react';
import astronut from '@/assets/images/Astronut.png'
import localFont from 'next/font/local'
import SubscribeForm from '../molecules/SubscribeForm';
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })

const WeeklyWidget = () => {
    return (
        <div className='WeeklyWidget rounded-2xl w-full h-fit bg-[#3B3B3B] flex flex-row items-center gap-16  p-16 text-white mt-36'>
            <div className=' w-[425px] h-[350px] flex-1 '>
                <Image src={astronut} alt='image' className=' w-full h-full rounded-2xl object-cover' />
            </div>

            <div className='flex  flex-col text-left gap-5 flex-1 '>
                <h2 className={`${WorkSans.className} text-5xl w-10/12 leading-tight`}>
                    Join our weekly digest
                </h2>
                <p className={`${WorkSansRegular.className} text-2xl w-10/12 mb-5 leading-normal`}>
                    Get exclusive promotions & updates straight to your inbox.
                </p>

                <SubscribeForm placeholder='Enter your email here' bgColor='#A259FF' hasIcon/>
            </div>
        </div>
    );
};

export default WeeklyWidget;