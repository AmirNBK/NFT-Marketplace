import React from 'react';
import image from '@/assets/images/Image5.png'
import Image from 'next/image';
import ConnectToWalletSection from './ConnectToWalletSection';


const ConnectWallet = () => {
    return (
            <div className='ConnectWallet flex sm:flex-row flex-col lg:gap-14 gap-8 w-full mt-7 lg:items-center items-stretch '>
                <Image src={image} alt='image' className='sm:w-1/2 w-full object-cover' unoptimized />

                <div className='-translate-y-6 lg:mt-0 sm:mt-16 mt-6 sm:px-0 px-8 3xl:mx-auto'>
                    <ConnectToWalletSection />
                </div>
            </div>
    );
};

export default ConnectWallet;