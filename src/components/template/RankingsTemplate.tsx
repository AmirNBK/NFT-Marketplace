import React from 'react';
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";

const RankingsTemplate = () => {
    return (
        <main className="flex min-h-screen flex-col items-center pt-8 justify-between  bg-[#2B2B2B]">
            <div className="px-28 w-full">
                <Header />
            </div>

            <Footer />

        </main>
    );
};

export default RankingsTemplate;