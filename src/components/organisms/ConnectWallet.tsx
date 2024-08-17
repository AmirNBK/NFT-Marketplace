import React from 'react';
import image from '@/assets/images/Image5.png'
import Image from 'next/image';
import ConnectToWalletSection from './ConnectToWalletSection';


const ConnectWallet = () => {
    return (
        <div className='ConnectWallet flex flex-row gap-14 w-full mt-7 items-center'>
            <div className='CreateAccount flex flex-row gap-14 w-full mt-7 items-center'>
                <Image src={image} alt='image' className='flex-1 w-1/2' unoptimized />

                <div className='flex-1 -translate-y-6'>
                    <ConnectToWalletSection />
                </div>
            </div>
        </div>
    );
};

export default ConnectWallet;