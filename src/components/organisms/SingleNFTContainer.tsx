import React from 'react';
import SingleNFTInfo from './SingleNFTInfo';
import fox from '@/assets/images/foxMini.png';
import AuctionTimer from '../molecules/AuctionTimer';
import PrimaryButton from '../atoms/PrimaryButton';

const SingleNFTContainer = () => {
    return (
        <div className='SingleNFTContainer'>
            <div className='lg:mx-24 sm:mx-10 mx-6 flex flex-row items-start'>
                <div className='w-full lg:flex-1 flex-[1.5]'>
                    <SingleNFTInfo name='The Orbitians' date={'Sep 30, 2022'} artist='Orbitian' artistIcon={fox}
                        description={
                            <div className='leading-relaxed'>
                                <p>
                                    The Orbitians
                                    <br />
                                    is a collection of 10,000 unique NFTs on the Ethereum blockchain,
                                </p>
                                <br />
                                <p>
                                    There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.
                                </p>
                                <br />
                                <p>
                                    They live in metal space machines, high up in the sky and only have one foot on Earth.
                                    <br />
                                    These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they&apos;ve taken to make human beings their target.
                                </p>
                            </div>
                        }
                        details={['View on Etherscan', 'View Original']}
                        tags={['Animation', 'illustration', 'moon', 'moon']}
                    />
                </div>

                <div className='sm:flex hidden lg:flex-[1.3] flex-1 w-full mx-auto justify-end lg:mr-12'>
                    <AuctionTimer bgColor='#3B3B3B' button={
                        <div className='mt-5'>
                            <PrimaryButton hasIcon={false} text='Place Bid' width='full' />
                        </div>
                    } />
                </div>
            </div>
        </div>
    );
};

export default SingleNFTContainer;
