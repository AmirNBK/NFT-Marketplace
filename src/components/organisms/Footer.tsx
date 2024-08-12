import React from 'react';
import storeFront from '@/assets/icons/Storefront.svg'
import NFT from '@/assets/images/NFT Marketplace.png'
import Image from 'next/image';
import localFont from 'next/font/local'
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
const spaceMono = localFont({ src: '../../assets/fonts/SpaceMono-Bold.ttf' })
import discord from '@/assets/icons/DiscordLogo.svg'
import youtube from '@/assets/icons/YoutubeLogo.svg'
import twitter from '@/assets/icons/TwitterLogo.svg'
import instagram from '@/assets/icons/InstagramLogo.svg'
import SubscribeForm from '../molecules/SubscribeForm';


const Footer = () => {
    const socialMediaIcons = [discord, youtube, twitter, instagram]
    return (
        <div className={` ${WorkSansRegular.className} Footer mt-28 bg-[#3B3B3B] w-full pt-12 flex flex-col px-32 text-white`}>
            <div className='Footer__content flex flex-row w-full justify-between gap-24'>
                <div className='Footer__leftSide flex flex-col gap-3'>
                    <div className=' flex flex-row items-center gap-3 mb-5'>
                        <Image src={storeFront} alt='storeFront' className='cursor-pointer' />
                        <Image src={NFT} alt='NFT Marketplace' className='translate-y-0.5 cursor-pointer' unoptimized />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className=' text-[#CCCCCC] text-lg'>
                            NFT marketplace UI created with Anima for Figma.
                        </p>
                        <p className=' text-[#CCCCCC] text-lg'>
                            Join our community
                        </p>
                        <div className='flex flex-row gap-3'>
                            {socialMediaIcons.map((item, index) => {
                                return <Image src={item} alt={item} key={index} />
                            })}
                        </div>
                    </div>
                </div>

                <div className='Footer__center flex flex-col gap-3'>
                    <div className=' flex flex-row items-center gap-3'>
                        <p className={`${spaceMono.className} text-2xl mb-5`}>
                            Explore
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className=' text-[#CCCCCC] text-lg'>
                            Marketplace
                        </p>
                        <p className=' text-[#CCCCCC] text-lg'>
                            Rankings
                        </p>
                        <p className=' text-[#CCCCCC] text-lg'>
                            Connect a wallet
                        </p>
                    </div>

                </div>

                <div className='Footer__rightSide flex flex-col gap-3'>
                    <div className=' flex flex-row items-center gap-3'>
                        <p className={`${spaceMono.className} text-2xl mb-5`}>
                            Join our weekly digest
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className=' text-[#CCCCCC] text-lg'>
                            Get exclusive promotions & updates straight to your inbox.
                        </p>
                        <SubscribeForm placeholder='Enter your email here' bgColor='#A259FF' hasIcon={false} />
                    </div>

                </div>

            </div>


            <hr className=' w-full border-[#858584] mt-8' />


            <p className='text-[#CCCCCC] text-sm mt-4 mb-7'>
                Ⓒ NFT Market. Developed by AmirNBK
            </p>
        </div>
    );
};

export default Footer;