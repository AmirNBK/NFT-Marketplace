import React from 'react';
import storeFront from '@/assets/icons/Storefront.svg'
import NFT from '@/assets/images/NFT Marketplace.png'
import Image from 'next/image';
import localFont from 'next/font/local'
import PrimaryButton from '../atoms/PrimaryButton';
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
import user from '@/assets/icons/User.svg'
import Link from 'next/link';

const Header = () => {
    const headerItems = [
        { label: 'Marketplace', link: '/marketplace' },
        { label: 'Rankings', link: '/rankings' },
        { label: 'Connect a wallet', link: '/connect-wallet' }
    ];

    return (
        <div className={`${WorkSans.className} Header text-white flex flex-row justify-between w-full items-center`}>
            <Link href={'/'} className='Header__leftSide flex flex-row items-center gap-3'>
                <Image src={storeFront} alt='storeFront' className='cursor-pointer' />
                <Image src={NFT} alt='NFT Marketplace' className='translate-y-0.5 cursor-pointer' unoptimized />
            </Link>
            <div className='flex flex-row gap-14 items-center'>
                {headerItems.map((item, index) => (
                    <Link key={index} href={item.link} className='cursor-pointer'>
                        {item.label}
                    </Link>
                ))}
                <PrimaryButton text='Sign Up' icon={user} hasIcon href={'/signup'} />
            </div>
        </div>
    );
};

export default Header;
