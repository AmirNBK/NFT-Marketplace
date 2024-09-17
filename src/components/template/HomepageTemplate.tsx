import React from 'react';
import CategoriesSection from "@/components/organisms/CategoriesSection";
import DiscoverMore from "@/components/organisms/DiscoverMore";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import HowItWorks from "@/components/organisms/HowItWorks";
import NFTHighlight from "@/components/organisms/NFTHighlight";
import TopCreators from "@/components/organisms/TopCreators";
import TrendingSection from "@/components/organisms/TrendingSection";
import WeeklyWidget from "@/components/organisms/WeeklyWidget";

const HomepageTemplate = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-8  bg-[#2B2B2B]">
            <div className="xl:px-28 lg:px-20 sm:px-14 px-8 w-full 3xl:w-4/5">
                <Header />
                <HeroSection />
                <TrendingSection />
                <TopCreators />
                <CategoriesSection />
                <DiscoverMore />
            </div>
            <NFTHighlight />
            <div className="xl:px-28 lg:px-20 sm:px-14 px-8 w-full 3xl:w-4/5">
                <HowItWorks />
                <WeeklyWidget />
            </div>
            <div className="mt-28 w-full ">
                <Footer />
            </div>

        </main>
    );
};

export default HomepageTemplate;