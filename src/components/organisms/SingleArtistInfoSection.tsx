import Image from 'next/image';
import React from 'react';
import bgPic from '@/assets/images/Image6.png'
import discord from '@/assets/icons/DiscordLogo.svg'
import youtube from '@/assets/icons/YoutubeLogo.svg'
import twitter from '@/assets/icons/TwitterLogo.svg'
import instagram from '@/assets/icons/InstagramLogo.svg'
import pic from '@/assets/images/Avatar6.png'
import ArtistInfo from './ArtistInfo';

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

            <div className='SingleArtistInfoSection__infos bg-[#2B2B2B] flex flex-row items-start'>
                <div className='SingleArtistInfoSection__infos__leftSide'>
                    <ArtistInfo profilePic={pic} name='Animakid' volume={'250k'} soldNfts={50} followers={300} bio="The internet's friendliest designer kid."
                        links={socialMedias}
                    />
                </div>
            </div>
        </div>
    );
};

export default SingleArtistInfoSection;