import Image, { StaticImageData } from 'next/image';
import React from 'react';
import localFont from 'next/font/local'
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
const spaceMono = localFont({ src: '../../assets/fonts/SpaceMono-Bold.ttf' })
import globe from '@/assets/icons/Globe.svg'
import TagComponent from '../atoms/TagComponent';


const SingleNFTInfo = ({ name, date, artist, artistIcon, description, details, tags, }: {
    name: string, date: string, artist: string, artistIcon: StaticImageData, description: string | React.HTMLProps<HTMLDivElement>, details: string[], tags: string[]
}) => {
    return (
        <div className={`${WorkSansRegular.className} SingleNFTInfo flex flex-col items-start text-left text-white gap-6`}>
            <div>
                <h2 className={`${WorkSans.className} text-5xl 3xl:text-6xl mb-3`}>
                    {name}
                </h2>
                <p className='text-[#858584] 3xl:text-2xl'>
                    Minted on {date}
                </p>
            </div>

            <div>
                <p className={`${spaceMono.className} text-[#858584] mb-2 3xl:text-xl`}>
                    Created By
                </p>

                <div className='flex flex-row items-center gap-2 3xl:mt-5'>
                    <Image src={artistIcon} alt='artistIcon' className='3xl:size-8' />
                    <p className={`${WorkSans.className} 3xl:text-xl`}>
                        {artist}
                    </p>
                </div>
            </div>


            <div className='w-10/12 3xl:text-2xl'>
                <p className={`${spaceMono.className} text-[#858584] mb-2`}>
                    Description
                </p>

                <>
                    {description}
                </>
            </div>

            <div>
                <p className={`${spaceMono.className} text-[#858584] mb-2 3xl:text-2xl`}>
                    Details
                </p>

                <div className='flex flex-col gap-2'>
                    {details.map((item, index) => {
                        return (
                            <div className='flex flex-row items-center gap-2' key={index}>
                                <Image src={globe} alt='globe' />
                                <p className='3xl:text-xl'>
                                    {item}
                                </p>
                            </div>
                        )
                    })}
                </div>

            </div>

            <div>
                <p className={`${spaceMono.className} text-[#858584] mb-2 3xl:text-xl`}>
                    Tags
                </p>

                <div className='flex lg:flex-row flex-col gap-4 mt-3'>
                    {tags.map((item, index) => {
                        return (
                            <TagComponent tag={item} key={index} />
                        )
                    })}
                </div>

            </div>
        </div>
    );
};

export default SingleNFTInfo;