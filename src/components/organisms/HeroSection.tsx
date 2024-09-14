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
        <div className={`${WorkSans.className} HeroSection flex flex-row items-center justify-center mt-16`}>
            <div className='HeroSection__leftSide text-white flex flex-col gap-7 justify-between flex-1'>
                <h1 className='xl:text-6xl text-4xl leading-tight'>
                    Discover digital art & Collect NFTs
                </h1>
                <p className={`${WorkSansRegular.className} xl:text-xl text-base`}>
                    NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
                </p>
                <PrimaryButton text='Get Started' icon={RocketLaunch} hasIcon />
                <div className='HeroSection__leftSide__Statistics flex flex-row justify-between'>
                    <Statistics statsNum={240} title='Total Sale' />
                    <Statistics statsNum={100} title='Auctions' />
                    <Statistics statsNum={240} title='Artist' />
                </div>
            </div>
            <div className='HeroSection__rightSide flex-[1.3]'>
                <Image src={heroAnimation} alt='animation' className='xl:size-[580px] size-[450px] ml-auto' />
            </div>
        </div>
    );
};

export default HeroSection;