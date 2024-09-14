import React from 'react';
import ape from '@/assets/icons/ape.png'
import Image from 'next/image';
import localFont from 'next/font/local'
import PrimaryButton from '../atoms/PrimaryButton';
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
const Bungee  = localFont({ src: '../../assets/fonts/ProtestGuerrilla-Regular.ttf' })
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
                <Image src={ape} alt='ApeIcon' className='cursor-pointer size-12' />
                <p className={`text-2xl text-[#A259FF] ${Bungee.className}`}>
                ApeNFT
                </p>
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
