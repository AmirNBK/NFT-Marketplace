import Image, { StaticImageData } from 'next/image';
import React from 'react';
import localFont from 'next/font/local';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' });

interface PrimaryButtonProps {
    text: string;
    icon?: StaticImageData;
    hasIcon: boolean;
    width?: string;
    href?: Url;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, icon, hasIcon, width = 'fit', href }) => {
    const buttonContent = (
        <button
            className={`bg-[#A259FF] flex flex-row-reverse gap-3 px-8 py-4 rounded-3xl justify-center items-center ${WorkSans.className} w-${width}`}>
            <p>{text}</p>
            {(hasIcon && icon) && <Image src={icon} alt='icon' />}
        </button>
    );

    return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
};

export default PrimaryButton;
