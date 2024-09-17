import React from 'react';
import Footer from "@/components/organisms/Footer";
import ConnectWalletComponent from '@/components/organisms/ConnectWalletComponent'
import Header from "@/components/organisms/Header";

const ConnectWalletTemplate = () => {
    return (
        <main className="flex min-h-screen flex-col items-center pt-8 bg-[#2B2B2B] justify-between">
            <div className="xl:px-28 lg:px-20 sm:px-14 px-8 w-full">
                <Header />
            </div>
            <ConnectWalletComponent />
            <Footer />

        </main>
    );
};

export default ConnectWalletTemplate;