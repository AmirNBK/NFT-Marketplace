import Image from 'next/image';
import React from 'react';
import image from '@/assets/images/NFT Highlight.png'

const NFTHighlight = () => {
    return (
        <div className='NFTHighlight w-full relative  min-h-[640px] mt-36'
        >
            <Image src={image} className="object-cover absolute inset-0 size-full" unoptimized alt="" />

            
        </div>

        
    );
};

export default NFTHighlight;