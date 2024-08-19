import Image from 'next/image';
import React from 'react';
import bgPic from '@/assets/images/Image6.png'
import discord from '@/assets/icons/DiscordLogo.svg'
import youtube from '@/assets/icons/YoutubeLogo.svg'
import twitter from '@/assets/icons/TwitterLogo.svg'
import instagram from '@/assets/icons/InstagramLogo.svg'
import pic from '@/assets/images/Avatar6.png'
import ArtistInfo from './ArtistInfo';
import PrimaryButton from '../atoms/PrimaryButton';
import copy from '@/assets/icons/Copy.svg'
import plus from '@/assets/icons/Plus.svg'
import ArtistArts from './ArtistArts';

const SingleArtistInfoSection = () => {

    const socialMedias = [
        { icon: discord, link: '#' },
        { icon: youtube, link: '#' },
        { icon: twitter, link: '#' },
        { icon: instagram, link: '#' },

    ]

    return (
        <div className='SingleArtistInfoSection w-full mt-6'>
            <div className='SingleArtistInfoSection__bgPic w-full'>
                <Image src={bgPic} alt='background' className=' w-full h-80 object-cover' unoptimized />
            </div>

            <div className='SingleArtistInfoSection__infos bg-[#2B2B2B] flex flex-row items-start px-24 w-full justify-between'>
                <div className='SingleArtistInfoSection__infos__leftSide relative'>
                    <ArtistInfo profilePic={pic} name='Animakid' volume={'250k'} soldNfts={50} followers={300} bio="The internet's friendliest designer kid."
                        links={socialMedias}
                    />
                </div>

                <div className='SingleArtistInfoSection__infos__rightSide text-white flex flex-row gap-4 mt-20'>
                    <PrimaryButton text='0xc0E3...B79C' hasIcon icon={copy} />
                    <button className='flex flex-row-reverse items-center px-8 py-4 gap-2 bg-transparent border-2 border-[#A259FF] rounded-3xl'>
                        <p>
                            Follow
                        </p>
                        <Image src={plus} alt='plus' />
                    </button>
                </div>
            </div>

            <div className=' w-full bg-[#2B2B2B] pt-8'>
                <ArtistArts />
            </div>
        </div>
    );
};

export default SingleArtistInfoSection;