import Image, { StaticImageData } from 'next/image';
import React from 'react';
import localFont from 'next/font/local'
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })

interface ProfileBadgeProps {
    name: string;
    imageSrc: string | StaticImageData;
}

const ProfileBadge: React.FC<ProfileBadgeProps> = ({ name, imageSrc }) => {
    return (
        <div className="flex gap-3 items-center px-5 py-2.5 rounded-3xl bg-[#3B3B3B] w-fit">
            <div className="flex gap-2.5 items-start self-stretch my-auto w-6">
                <Image loading="lazy" src={imageSrc} className="object-contain w-6 aspect-square rounded-full" alt={`${name}'s profile`} />
            </div>
            <div className={`${WorkSansRegular.className} self-stretch my-auto text-base leading-snug text-white`}>
                {name}
            </div>
        </div>
    );
};

export default ProfileBadge;