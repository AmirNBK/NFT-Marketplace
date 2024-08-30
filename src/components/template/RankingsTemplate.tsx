import React from 'react';
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import localFont from 'next/font/local'
import CreatorsRankings from '../organisms/CreatorsRankings';
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })


const RankingsTemplate = () => {
    return (
        <main className="flex min-h-screen flex-col items-center pt-8 justify-between  bg-[#2B2B2B]">
            <div className="px-28 w-full">
                <Header />
            </div>

            <div className='MarketplaceSearchBar w-full flex flex-col items-start gap-4 justify-start px-44 mt-20'>
                <h1 className={`${WorkSans.className} mt-8 text-5xl font-semibold leading-none text-white`}>
                    Top Creators
                </h1>
                <p className={`${WorkSansRegular.className} text-xl text-white tracking-wide`}>
                    Check out top ranking NFT artists on the NFT Marketplace.
                </p>
            </div>

            <CreatorsRankings />

            <Footer />

        </main>
    );
};

export default RankingsTemplate;