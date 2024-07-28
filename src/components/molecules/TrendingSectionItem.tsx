import Image, { StaticImageData } from 'next/image';
import localFont from 'next/font/local'
const spaceMono = localFont({ src: '../../assets/fonts/SpaceMono-Bold.ttf' })
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
import React from 'react';

const TrendingSectionItem = ({ images, title, creator, creatorPic, morePicsAmount }:
    { images: StaticImageData[], title: string, creator: string, creatorPic: StaticImageData, morePicsAmount: number }) => {
    return (
        <div className='TrendingSectionItem w-full'>
            <div className="flex flex-col text-2xl leading-8 text-white rounded-3xl w-full">
                <div className=' w-full'>
                    <Image
                        unoptimized
                        loading="lazy"
                        src={images[0]}
                        className=" rounded-3xl h-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-full" style={{ boxShadow: 'none' }}
                        alt='image'
                    />
                </div>
                <div className="flex gap-4 mt-4 font-bold text-center capitalize whitespace-nowrap leading-[160%] w-full justify-between">
                    <Image
                        unoptimized
                        loading="lazy"
                        src={images[1]}
                        className="rounded-3xl w-1/3 h-[100px] object-cover"
                        alt='image'
                    />
                    <Image
                        unoptimized
                        loading="lazy"
                        src={images[2]}
                        className="rounded-3xl w-1/3 h-[100px] object-cover"
                        alt='image'
                    />
                    <div className={`${spaceMono.className} px-4 py-8 bg-purple-500 w-1/3 rounded-3xl h-[100px]`}>
                        {morePicsAmount}+
                    </div>
                </div>
                <div className={` ${WorkSans.className} mt-4  font-semibold capitalize `}>
                    {title}
                </div>
                <div className={` ${WorkSansRegular.className} flex gap-3 pr-5 mt-2.5 text-base whitespace-nowrap rounded-3xl`}>
                    <Image
                        unoptimized
                        loading="lazy"
                        src={creatorPic}
                        className="shrink-0 w-6 aspect-square"
                        alt='image'
                    />
                    <div className="flex-1">
                        {creator}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingSectionItem;