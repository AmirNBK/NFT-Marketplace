import Image from 'next/image';
import React from 'react';
import rocket from '@/assets/icons/RocketLaunchPurple.svg'
import localFont from 'next/font/local'
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })

const TopCreators = () => {
    return (
        <div className='TopCreators text-white w-full mt-32'>
            <div className='TopCreators__header flex flex-row items-end justify-between'>
                <div className='TopCreators__header__titleDescription flex flex-col gap-3'>
                    <h3 className={`${WorkSans.className} text-4xl`}>
                        Top creators
                    </h3>
                    <p className={`${WorkSansRegular.className} text-xl`}>
                        Checkout Top Rated Creators on the NFT Marketplace
                    </p>
                </div>

                <div className='TopCreators__header__button'>
                    <button className='flex flex-row-reverse gap-3 border-2 border-purple-500 py-4 px-12 rounded-2xl items-center'>
                        <p>
                            View Rankings
                        </p>
                        <Image src={rocket} alt='rocket' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopCreators;