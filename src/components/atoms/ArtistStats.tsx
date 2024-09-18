import React from 'react';
import localFont from 'next/font/local'
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
const spaceMono = localFont({ src: '../../assets/fonts/SpaceMono-Bold.ttf' })

const ArtistStats = ({ title, stat }: { title: string, stat: string | number }) => {
    return (
        <div className='ArtistStats flex flex-col gap-0.5'>
            <p className={`${spaceMono.className} 3xl:text-3xl text-2xl`}>
                {stat}+
            </p>
            <p className={`${WorkSansRegular.className} 3xl:text-xl text-lg`}>
                {title}
            </p>
        </div>
    );
};

export default ArtistStats;