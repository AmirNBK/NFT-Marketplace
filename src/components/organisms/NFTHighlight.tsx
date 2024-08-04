import Image from 'next/image';
import React from 'react';
import image from '@/assets/images/NFT Highlight.png'
import ProfileBadge from '../atoms/ProfileBadge';
import avatar from '@/assets/images/Avatar1.png'
import localFont from 'next/font/local'
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
import eye from '@/assets/icons/Eye.svg'

const NFTHighlight = () => {
    return (
        <div className='NFTHighlight w-full relative  min-h-[640px] mt-36'
        >
            <Image src={image} className="object-cover absolute inset-0 size-full" unoptimized alt="" />

            <div className=' absolute left-[10%] top-[55%]'>
                <ProfileBadge name='Shroomie' imageSrc={avatar} />
                <h1 className={`${WorkSans.className} self-stretch mt-8 text-5xl font-semibold leading-none text-white capitalize`}>
                    Magic Mashrooms
                </h1>
                <button className="flex gap-3 justify-center items-center px-11 py-5 mt-8 text-base font-semibold leading-snug text-center bg-white rounded-2xl text-zinc-800">
                    <Image loading="lazy" src={eye} className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
                    <span className="self-stretch my-auto">
                        See NFT
                    </span>
                </button>
            </div>

            <div>

            </div>

        </div>


    );
};

export default NFTHighlight;