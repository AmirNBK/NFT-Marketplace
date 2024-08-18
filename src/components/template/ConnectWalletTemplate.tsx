import React from 'react';
import Footer from "@/components/organisms/Footer";
import ConnectWalletComponent from '@/components/organisms/ConnectWalletComponent'
import Header from "@/components/organisms/Header";

const ConnectWalletTemplate = () => {
    return (
        <main className="flex min-h-screen flex-col items-center pt-8  bg-[#2B2B2B]">
            <div className="px-28 w-full">
                <Header />
            </div>
            <ConnectWalletComponent />
            <Footer />

        </main>
    );
};

export default ConnectWalletTemplate;