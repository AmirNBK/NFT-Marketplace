import Image, { StaticImageData } from 'next/image';
import React from 'react';
import localFont from 'next/font/local'
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })

const WalletComponent = ({ walletName, icon }: { walletName: string, icon: StaticImageData }) => {
    return (
        <button className='WalletComponent border flex flex-row
         items-center gap-4 py-4 pl-10 w-9/12
        border-[#A259FF] rounded-[20px] bg-[#3B3B3B]'>

            <Image src={icon} alt='wallet icon' />

            <p className={`${WorkSans.className} text-xl`}>
                {walletName}
            </p>
        </button>
    );
};

export default WalletComponent;