import Image, { StaticImageData } from 'next/image';
import React from 'react';
import ArtistProfilePic from '../atoms/ArtistProfilePic';
import localFont from 'next/font/local'
import ArtistStats from '../atoms/ArtistStats';
import Link from 'next/link';
import PrimaryButton from '../atoms/PrimaryButton';
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
const spaceMono = localFont({ src: '../../assets/fonts/SpaceMono-Bold.ttf' })
import copy from '@/assets/icons/Copy.svg'
import plus from '@/assets/icons/Plus.svg'

type linksType = { icon: StaticImageData, link: string }[]

const ArtistInfo = ({ profilePic, name, volume, soldNfts, followers, bio, links }:
    { profilePic: StaticImageData, name: string, volume: string | number, soldNfts: string | number, followers: string | number, bio: string, links: linksType }
) => {
    return (
        <div className='ArtistInfo'>
            <ArtistProfilePic picture={profilePic} />

            <div className='flex flex-col gap-8 text-white mt-20'>
                <p className={`${WorkSans.className} 3xl:text-5xl sm:text-4xl text-3xl`}>
                    {name}
                </p>

                <div className='SingleArtistInfoSection__infos__rightSide text-white flex lg:hidden sm:flex-row flex-col gap-4'>
                    <div className='sm:hidden block'>
                        <PrimaryButton text='0xc0E3...B79C' hasIcon icon={copy} width='full' />
                    </div>
                    <div className='sm:block hidden'>
                        <PrimaryButton text='0xc0E3...B79C' hasIcon icon={copy} />
                    </div>
                    <button className='flex flex-row-reverse items-center px-8 py-4 gap-2 justify-center bg-transparent border-2 border-[#A259FF] rounded-3xl'>
                        <p className='3xl:text-xl'>
                            Follow
                        </p>
                        <Image src={plus} alt='plus' />
                    </button>
                </div>

                <div className='ArtistInfo__stats flex flex-row gap-14'>
                    <ArtistStats stat={volume} title='Volume' />
                    <ArtistStats stat={soldNfts} title='NFTs Sold' />
                    <ArtistStats stat={followers} title='Followers' />
                </div>

                <div className='ArtistInfo__bio flex flex-col gap-2'>
                    <p className={`${spaceMono.className} text-[#858584] 3xl:text-xl`}>
                        Bio
                    </p>
                    <p className={`${WorkSansRegular.className} 3xl:text-xl`}>
                        {bio}
                    </p>
                </div>

                <div className='ArtistInfo__links flex flex-col gap-3'>
                    <p className={`${spaceMono.className} text-[#858584] 3xl:text-xl`}>
                        Links
                    </p>
                    <div className='flex flex-row gap-3'>
                        {links.map((item, index) => {
                            return (
                                <Link href={item.link} key={index}>
                                    <Image src={item.icon} alt='icon' className='3xl:size-10' />
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ArtistInfo;