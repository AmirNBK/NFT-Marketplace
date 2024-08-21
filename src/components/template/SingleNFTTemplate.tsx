import React from 'react';
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import bgPic from '@/assets/images/Image10.png'
import Image from 'next/image';
import SingleNFTContainer from '../organisms/SingleNFTContainer';

const SingleNFTTemplate = () => {
    return (
        <main className="flex min-h-screen flex-col items-center pt-8  bg-[#2B2B2B]">
            <div className="px-28 w-full">
                <Header />
            </div>

            <div className='w-full mb-8 mt-4'>
                <Image src={bgPic} alt='backgroundPic' className=' w-full h-[600px] object-cover' unoptimized />
            </div>

            <div className='mb-16'>
                <SingleNFTContainer />

            </div>

            <Footer />

        </main>
    );
};

export default SingleNFTTemplate;