import React from 'react';
import localFont from 'next/font/local'
import WalletComponent from '../molecules/WalletComponent';
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
import metaMask from '@/assets/icons/Metamask.svg'
import walletConnect from '@/assets/icons/WalletConnect.svg'
import coinBase from '@/assets/icons/Coinbase.svg'


const ConnectToWalletSection = () => {
    return (
        <div className='ConnectToWalletSection text-white flex flex-col gap-5 sm:w-10/12 lg:w-8/12 3xl:w-10/12'>
            <h2 className={`xl:text-5xl sm:text-3xl text-4xl ${WorkSans.className}`}>
                Connect wallet
            </h2>

            <p className={`${WorkSansRegular.className} lg:text-xl text-base`}>
                Choose a wallet you want to connect. There are several wallet providers.
            </p>

            <div className='flex flex-col gap-5 mt-5 sm:mb-16 mb-5'>
                <WalletComponent walletName='Metamask' icon={metaMask} />
                <WalletComponent walletName='Wallet Connect' icon={walletConnect} />
                <WalletComponent walletName='Coinbase' icon={coinBase} />

            </div>
        </div>
    );
};

export default ConnectToWalletSection;