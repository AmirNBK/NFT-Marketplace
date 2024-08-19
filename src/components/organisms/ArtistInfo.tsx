import Image, { StaticImageData } from 'next/image';
import React from 'react';
import ArtistProfilePic from '../atoms/ArtistProfilePic';
import localFont from 'next/font/local'
import ArtistStats from '../atoms/ArtistStats';
import Link from 'next/link';
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
const spaceMono = localFont({ src: '../../assets/fonts/SpaceMono-Bold.ttf' })

type linksType = { icon: StaticImageData, link: string }[]

const ArtistInfo = ({ profilePic, name, volume, soldNfts, followers, bio, links }:
    { profilePic: StaticImageData, name: string, volume: string | number, soldNfts: string | number, followers: string | number, bio: string, links: linksType }
) => {
    return (
        <div className='ArtistInfo'>
            <ArtistProfilePic picture={profilePic} />

            <div className='flex flex-col gap-8 text-white mt-20'>
                <p className={`${WorkSans.className} text-4xl`}>
                    {name}
                </p>

                <div className='ArtistInfo__stats flex flex-row gap-14'>
                    <ArtistStats stat={volume} title='Volume' />
                    <ArtistStats stat={soldNfts} title='NFTs Sold' />
                    <ArtistStats stat={followers} title='Followers' />
                </div>

                <div className='ArtistInfo__bio flex flex-col gap-2'>
                    <p className={`${spaceMono.className} text-[#858584]`}>
                        Bio
                    </p>
                    <p className={`${WorkSansRegular.className}`}>
                        {bio}
                    </p>
                </div>

                <div className='ArtistInfo__links flex flex-col gap-3'>
                    <p className={`${spaceMono.className} text-[#858584]`}>
                        Links
                    </p>
                    <div className='flex flex-row gap-3'>
                        {links.map((item, index) => {
                            return (
                                <Link href={item.link} key={index}>
                                    <Image src={item.icon} alt='icon' />
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