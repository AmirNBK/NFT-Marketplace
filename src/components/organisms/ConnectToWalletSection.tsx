import React from 'react';
import localFont from 'next/font/local'
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })

const ConnectToWalletSection = () => {
    return (
        <div className='ConnectToWalletSection text-white flex flex-col gap-5 w-8/12'>
            <h2 className={`text-5xl ${WorkSans.className}`}>
                Connect wallet
            </h2>

            <p className={`${WorkSansRegular.className} text-xl`}>
                Choose a wallet you want to connect. There are several wallet providers.
            </p>
        </div>
    );
};

export default ConnectToWalletSection;