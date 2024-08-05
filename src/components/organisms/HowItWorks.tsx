import React from 'react';
import localFont from 'next/font/local'
import Image from 'next/image';
import HowItWorksCard from '../molecules/HowItWorksCard';
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
import image1 from '@/assets/images/Icon.png'
import image2 from '@/assets/images/Icon(1).png'
import image3 from '@/assets/images/Icon(2).png'


const HowItWorks = () => {
    return (
        <div className='HowItWorks text-white w-full mt-28'>
            <div className='HowItWorks__header flex flex-col gap-3'>
                <h3 className={`${WorkSans.className} text-4xl`}>
                    How it works
                </h3>
                <p className={`${WorkSansRegular.className} text-xl`}>
                    Find out how to get started
                </p>
            </div>

            <div className='grid grid-cols-3 gap-6 mt-8'>
                <HowItWorksCard title='Setup Your wallet' description='Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.'
                    image={image1}
                />
                <HowItWorksCard title='Create Collection' description='Upload your work and setup your collection. Add a description, social links and floor price.'
                    image={image2}
                />
                <HowItWorksCard title='Start Earning' description='Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.'
                    image={image3}
                />
            </div>

        </div>
    );
};

export default HowItWorks;