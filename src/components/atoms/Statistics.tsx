import React from 'react';
import localFont from 'next/font/local'
const spaceMono = localFont({ src: '../../assets/fonts/SpaceMono-Bold.ttf' })
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })

const Statistics = ({ statsNum, title }: { statsNum: number, title: string }) => {
    return (
        <div className='Statistics flex flex-col xl:text-3xl text-xl'>
            <p className={`${spaceMono.className}`}> {statsNum}k+ </p>
            <p className={`${WorkSansRegular.className}`}> {title} </p>
        </div>
    );
};

export default Statistics;