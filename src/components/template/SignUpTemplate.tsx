import React from 'react';
import CreateAccount from "@/components/organisms/CreateAccount";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";

const SignUpTemplate = () => {
    
    return (
        <main className="flex min-h-screen flex-col items-center pt-8 bg-[#2B2B2B] justify-between">
            <div className="xl:px-28 lg:px-20 sm:px-14 px-8 w-full">
            <a href="/about">Go to About Page</a>
                <Header />
            </div>
            <CreateAccount />
            <Footer />

        </main>
    );
};

export default SignUpTemplate;