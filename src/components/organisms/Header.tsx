'use client';
import React from 'react';
import ape from '@/assets/icons/ape.png'
import Image from 'next/image';
import localFont from 'next/font/local'
import PrimaryButton from '../atoms/PrimaryButton';
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
const Bungee = localFont({ src: '../../assets/fonts/ProtestGuerrilla-Regular.ttf' })
import user from '@/assets/icons/User.svg'
import Link from 'next/link';
import burgerMenu from '@/assets/icons/Burger Menu.svg'
import home from '@/assets/icons/home.svg'
import wallet from '@/assets/icons/wallet.svg'
import ranking from '@/assets/icons/ranking.svg'
import purchase from '@/assets/icons/purchase.svg'
import SignUp from '@/assets/icons/signupIcon.svg'
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

const Header = () => {
    const headerItemsDesktop = [
        { label: 'Marketplace', link: '/marketplace' },
        { label: 'Rankings', link: '/rankings' },
        { label: 'Connect a wallet', link: '/connect-wallet' }
    ];

    const headerItemsMobile = [
        { label: 'Home', link: '/', icon: home },
        { label: 'Sign Up', link: '/signup', icon: SignUp },
        { label: 'Marketplace', link: '/marketplace', icon: purchase },
        { label: 'Rankings', link: '/rankings', icon: ranking },
        { label: 'Connect a wallet', link: '/connect-wallet', icon: wallet },
    ];

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <div className='flex justify-center h-1/3 border-b border-[#5C5F65]'>
                <Link href={'/'} className='Header__leftSide flex flex-row items-center gap-3'>
                    <Image src={ape} alt='ApeIcon' className='cursor-pointer size-12' />
                    <p className={`text-2xl text-[#A259FF] ${Bungee.className}`}>
                        ApeNFT
                    </p>
                </Link>
            </div>
            <List className='flex flex-col gap-9 mt-4 p-6 text-[#fff]'>
                {headerItemsMobile.map((item, index) => (
                    <Link href={item.link} className='flex flex-row items-center gap-3 text-sm' key={index}>
                        <Image src={item.icon} alt='icon' className=' size-5' />
                        <p>
                            {item.label}
                        </p>
                    </Link>
                ))}
            </List>
        </Box>
    );

    return (
        <div className={`${WorkSans.className} Header text-white flex flex-row justify-between w-full items-center`}>
            <Link href={'/'} className='Header__leftSide flex flex-row items-center gap-3'>
                <Image src={ape} alt='ApeIcon' className='cursor-pointer size-12' />
                <p className={`text-2xl text-[#A259FF] ${Bungee.className}`}>
                    ApeNFT
                </p>
            </Link>
            <div className='lg:flex hidden flex-row xl:gap-14 gap-10 items-center'>
                {headerItemsDesktop.map((item, index) => (
                    <Link key={index} href={item.link} className='cursor-pointer'>
                        {item.label}
                    </Link>
                ))}
                <PrimaryButton text='Sign Up' icon={user} hasIcon href={'/signup'} />
            </div>

            <Image src={burgerMenu} alt='burgerMenu' className='lg:hidden block' onClick={() => {
                setOpen(true)
            }} />

            <Drawer open={open} onClose={toggleDrawer(false)}
            >
                {DrawerList}
            </Drawer>


            <style>
                {
                    `
                    .css-4t3x6l-MuiPaper-root-MuiDrawer-paper {
                    background-color : #2D2F39;
                    }
                    `
                }
            </style>
        </div>
    );
};

export default Header;
