import React from 'react';
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import SingleArtistInfoSection from '../organisms/SingleArtistInfoSection';

const SingleArtistTemplate = () => {
    return (
        <main className="flex min-h-screen flex-col items-center pt-8  bg-[#2B2B2B]">
            <div className="px-28 w-full">
                <Header />
            </div>

            <SingleArtistInfoSection />

            <Footer />

        </main>
    );
};

export default SingleArtistTemplate;