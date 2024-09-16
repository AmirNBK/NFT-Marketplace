import React from 'react';
import PrimaryButton from '../atoms/PrimaryButton';
import RocketLaunch from '@/assets/icons/RocketLaunch.svg'
import localFont from 'next/font/local'
import Statistics from '../atoms/Statistics';
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
import heroAnimation from '@/assets/gifs/heroAnimation.gif'
import Image from 'next/image';


const HeroSection = () => {
    return (
        <div className={`${WorkSans.className} HeroSection flex sm:flex-row flex-col items-center justify-center mt-16`}>
            <div className='HeroSection__leftSide text-white flex flex-col gap-7 justify-between flex-1'>
                <h1 className='xl:text-6xl sm:text-4xl text-3xl leading-tight'>
                    Discover digital art & Collect NFTs
                </h1>
                <p className={`${WorkSansRegular.className} xl:text-xl text-base`}>
                    NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
                </p>
                <div className='sm:block hidden'>
                    <PrimaryButton text='Get Started' icon={RocketLaunch} hasIcon />
                </div>
                <div className='HeroSection__leftSide__Statistics sm:flex hidden flex-row justify-between'>
                    <Statistics statsNum={240} title='Total Sale' />
                    <Statistics statsNum={100} title='Auctions' />
                    <Statistics statsNum={240} title='Artist' />
                </div>
            </div>
            <div className='HeroSection__rightSide lg:flex-[1.3] flex-[1.1] lg:translate-x-0 sm:translate-x-12 translate-x-0 sm:mt-0 mt-6'>
                <Image src={heroAnimation} alt='animation' className='xl:size-[580px] sm:size-[450px] size-[450px] ml-auto' />
            </div>

            <div className='sm:hidden block text-white my-8 w-full'>
                <PrimaryButton text='Get Started' icon={RocketLaunch} hasIcon width='full' />
            </div>
            <div className='HeroSection__leftSide__Statistics sm:hidden flex flex-row w-full justify-between text-white'>
                <Statistics statsNum={240} title='Total Sale' />
                <Statistics statsNum={100} title='Auctions' />
                <Statistics statsNum={240} title='Artist' />
            </div>
        </div>
    );
};

export default HeroSection;