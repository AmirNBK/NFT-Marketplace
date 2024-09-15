import React from 'react';
import localFont from 'next/font/local'
import Image from 'next/image';
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
import eye from '@/assets/icons/Eye.svg'
import NFTComponent from '../molecules/NFTComponent';
import image1 from '@/assets/images/Image1.png'
import image2 from '@/assets/images/Image2.png'
import image3 from '@/assets/images/Image3.png'
import fox from '@/assets/images/foxMini.png'


const DiscoverMore = () => {
    return (
        <div className='DiscoverMore w-full text-white lg:mt-36 mt-20'>
            <div className='DiscoverMore__header flex flex-row items-end justify-between'>
                <div className='DiscoverMore__header__titleDescription flex flex-col gap-3'>
                    <h3 className={`${WorkSans.className} xl:text-4xl text-3xl`}>
                        Discover More NFTs
                    </h3>
                    <p className={`${WorkSansRegular.className} text-xl`}>
                        Explore new trending NFTs
                    </p>
                </div>

                <div className='DiscoverMore__header__button'>
                    <button className='flex flex-row-reverse gap-3 border-2 border-purple-500 py-4 px-12 rounded-2xl items-center'>
                        <p>
                            See All
                        </p>
                        <Image src={eye} alt='rocket' />
                    </button>
                </div>
            </div>

            {/* Desktop size */}
            <div className='lg:grid hidden grid-cols-3 mt-14 gap-10'>
                <NFTComponent image={image1} title='Distant Galaxy' creatorPic={fox} creator='MoonDancer' price={1.63} bid={0.33} />
                <NFTComponent image={image2} title='Life On Edena' creatorPic={fox} creator='NebulaKid' price={1.63} bid={0.33} />
                <NFTComponent image={image3} title='AstroFiction' creatorPic={fox} creator='Spaceone' price={1.63} bid={0.33} />
            </div>

            {/* Tablet size */}
            <div className='lg:hidden grid grid-cols-2 mt-14 gap-10'>
                <NFTComponent image={image1} title='Distant Galaxy' creatorPic={fox} creator='MoonDancer' price={1.63} bid={0.33} />
                <NFTComponent image={image2} title='Life On Edena' creatorPic={fox} creator='NebulaKid' price={1.63} bid={0.33} />
            </div>

        </div>
    );
};

export default DiscoverMore;