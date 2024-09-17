import React from 'react';
const Bungee  = localFont({ src: '../../assets/fonts/ProtestGuerrilla-Regular.ttf' })
import ape from '@/assets/icons/ape.png'
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
        <div className={` ${WorkSansRegular.className} Footer bg-[#3B3B3B] w-full pt-12 flex flex-col xl:px-32 sm:px-20 px-8 text-white`}>
            <div className='Footer__content flex lg:flex-row flex-col w-full justify-between lg:gap-24 gap-8'>
                <div className='Footer__leftSide flex flex-col gap-3'>
                    <div className=' flex flex-row items-center gap-3 lg:mb-5 mb-2'>
                        <Image src={ape} alt='ApeIcon' className='cursor-pointer size-12' />
                        <p className={`text-2xl text-[#A259FF] ${Bungee.className}`}>
                            ApeNFT
                        </p>
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
                        <p className={`${spaceMono.className} text-2xl lg:mb-5 mb-2`}>
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
                        <p className={`${spaceMono.className} text-2xl g:mb-5 mb-2`}>
                            Join our weekly digest
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className=' text-[#CCCCCC] text-lg'>
                            Get exclusive promotions & updates straight to your inbox.
                        </p>
                        <div className='sm:w-1/2 lg:w-full w-full lg:mt-0 mt-3'>
                        <SubscribeForm placeholder='Enter your email here' bgColor='#A259FF' hasIcon={false} />

                        </div>
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