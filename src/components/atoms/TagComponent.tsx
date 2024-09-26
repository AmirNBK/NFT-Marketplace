import React from 'react';
import localFont from 'next/font/local'
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })

const TagComponent = ({ tag }: { tag: string }) => {
    return (
        <button className={`${WorkSans.className} rounded-[20px] py-2 px-6 bg-[#3B3B3B] 3xl:text-xl`}>
            {tag}
        </button>
    );
};

export default TagComponent;