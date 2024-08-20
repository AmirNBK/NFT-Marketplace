import Image, { StaticImageData } from 'next/image';
import React from 'react';
import localFont from 'next/font/local'
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
const spaceMono = localFont({ src: '../../assets/fonts/SpaceMono-Regular.ttf' })

const NFTComponent = ({ image, title, creatorPic, creator, price, bid, bgColor = 'rgb(59,59,59)' }:
    { image: StaticImageData, title: string, creatorPic: StaticImageData, creator: string, price: string | number, bid: string | number, bgColor?: string }) => {
    return (
        <div className='NFTComponent rounded-2xl flex flex-col text-white '>
            <div className='NFTComponent__image w-full rounded-t-2xl'>
                <Image src={image} alt='image' className='rounded-t-2xl' />
            </div>

            <div className={`NFTComponent__content bg-[${bgColor}] p-5 rounded-b-2xl`}>
                <div className='NFTComponent__content__creator flex flex-col gap-2'>
                    <div>
                        <h3 className={`${WorkSans.className} text-2xl`}>
                            {title}
                        </h3>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <Image src={creatorPic} alt='creator pic' />
                        <p className={`${spaceMono.className}`}> {creator} </p>
                    </div>
                </div>

                <div className={` ${spaceMono.className} NFTComponent__content__prices flex flex-row w-full justify-between mt-4`}>
                    <div className='flex flex-col items-start'>
                        <p className='text-[#858584]'>
                            Price
                        </p>
                        <p className='text-lg'>
                            {price} ETH
                        </p>
                    </div>
                    <div className='flex flex-col items-start'>
                        <p className='text-[#858584]'>
                            Highest Bid
                        </p>
                        <p className='text-lg'>
                            {bid} wETH
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NFTComponent;