import React from 'react';
import localFont from 'next/font/local'
import SearchBar from '../molecules/SearchBar';
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })

const MarketplaceSearchBar = () => {
    return (
        <div className='MarketplaceSearchBar flex flex-col items-start gap-4 justify-start px-44'>
            <h1 className={`${WorkSans.className} mt-8 text-5xl font-semibold leading-none text-white`}>
                Browse Marketplace
            </h1>
            <p className={`${WorkSansRegular.className} text-xl text-white tracking-wide`}>
                Browse through more than 50k NFTs on the NFT Marketplace.
            </p>

            <div className='mt-4 w-full'>
                <SearchBar />
            </div>
        </div>
    );
};

export default MarketplaceSearchBar;