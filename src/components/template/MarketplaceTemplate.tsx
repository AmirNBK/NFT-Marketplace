import React from 'react';
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import MarketplaceSearchBar from '../organisms/MarketplaceSearchBar';

const MarketplaceTemplate = () => {
    return (
        <main className="flex min-h-screen flex-col pt-8  bg-[#2B2B2B] justify-between">
            <div className="px-28 w-full">
                <Header />
            </div>
            <div className='w-full mt-6'>
                <MarketplaceSearchBar />
            </div>
            <Footer />

        </main>
    );
};

export default MarketplaceTemplate;