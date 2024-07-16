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
                <h1 className='text-6xl leading-tight'>
                    Discover digital art & Collect NFTs
                </h1>
                <p className={`${WorkSansRegular.className} text-xl`}>
                    NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
                </p>
                <PrimaryButton text='Get Started' icon={RocketLaunch} />
                <div className='HeroSection__leftSide__Statistics flex flex-row justify-between'>
                    <Statistics statsNum={240} title='Total Sale' />
                    <Statistics statsNum={100} title='Auctions' />
                    <Statistics statsNum={240} title='Artist' />
                </div>
            </div>
            <div className='HeroSection__rightSide flex-[1.3]'>
                <Image src={heroAnimation} alt='animation' className='size-[580px] ml-auto' />
            </div>
        </div>
    );
};

export default HeroSection;