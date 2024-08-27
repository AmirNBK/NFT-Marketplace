import React from 'react';
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import bgPic from '@/assets/images/Image10.png'
import Image from 'next/image';
import localFont from 'next/font/local'
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
import SingleNFTContainer from '../organisms/SingleNFTContainer';
import arrowRight from '@/assets/icons/ArrowRight.svg'
import ArtistNFTs from '../organisms/ArtistNFTs';

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

            <div className='w-full px-24 flex flex-col gap-6 text-white mb-24'>
                <div className='flex flex-row w-full justify-between items-center'>
                    <h3 className={`${WorkSans.className} text-4xl`}>
                        More from this artist
                    </h3>
                    <button
                        className={` bg-transparent border-2 border-[#A259FF] flex flex-row-reverse gap-3 px-8 py-4 rounded-[20px] justify-center items-center ${WorkSans.className}`}>
                        <p>Go To Artist Page</p>
                        <Image src={arrowRight} alt='icon' />
                    </button>
                </div>

                <ArtistNFTs itemsInRow={3} />
            </div>

            <Footer />

        </main>
    );
};

export default SingleNFTTemplate;