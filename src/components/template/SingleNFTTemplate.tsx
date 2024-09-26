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
            <div className="xl:px-28 lg:px-20 sm:px-14 px-8 w-full">
                <Header />
            </div>

            <div className='w-full mb-8 mt-4'>
                <Image src={bgPic} alt='backgroundPic' className=' w-full h-[600px] object-cover' unoptimized />
            </div>

            <div className='mb-16'>
                <SingleNFTContainer />

            </div>

            <div className='w-full lg:px-24 sm:px-10 px-6 flex flex-col gap-6 text-white mb-24'>
                <div className='flex flex-row w-full justify-between items-center'>
                    <h3 className={`${WorkSans.className} sm:text-4xl text-3xl`}>
                        More from this artist
                    </h3>
                    <button
                        className={`sm:flex hidden bg-transparent border-2 border-[#A259FF]  flex-row-reverse gap-3 px-8 py-4 rounded-[20px] justify-center items-center ${WorkSans.className}`}>
                        <p>Go To Artist Page</p>
                        <Image src={arrowRight} alt='icon' />
                    </button>
                </div>


                <div className='lg:block hidden'>
                    <ArtistNFTs itemsInRow={3} />
                </div>

                <div className='sm:block hidden'>
                    <ArtistNFTs itemsInRow={2} />
                </div>

                <div className='sm:hidden block'>
                    <ArtistNFTs itemsInRow={1} />
                </div>
            </div>

            <Footer />

        </main>
    );
};

export default SingleNFTTemplate;