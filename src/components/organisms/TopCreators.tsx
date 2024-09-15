import Image from 'next/image';
import React from 'react';
import rocket from '@/assets/icons/RocketLaunchPurple.svg'
import localFont from 'next/font/local'
import CreatorsComponent from '../molecules/CreatorsComponent';
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
import avatar1 from '@/assets/images/Avatar1.png'
import avatar2 from '@/assets/images/Avatar2.png'
import avatar3 from '@/assets/images/Avatar3.png'
import avatar4 from '@/assets/images/Avatar4.png'
import avatar5 from '@/assets/images/Avatar5.png'
import avatar6 from '@/assets/images/Avatar6.png'


const TopCreators = () => {
    return (
        <div className='TopCreators text-white w-full lg:mt-36 mt-24'>
            <div className='TopCreators__header flex flex-row items-end justify-between'>
                <div className='TopCreators__header__titleDescription flex flex-col gap-3 lg:w-fit w-1/2'>
                    <h3 className={`${WorkSans.className} xl:text-4xl text-3xl`}>
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

            <div className='grid lg:grid-cols-4 grid-cols-2 gap-10 mt-14'>
                <CreatorsComponent index={1} avatar={avatar1} name='Keepitreal' sales={34.53} />
                <CreatorsComponent index={2} avatar={avatar2} name='Keepitreal' sales={34.53} />
                <CreatorsComponent index={3} avatar={avatar3} name='Keepitreal' sales={34.53} />
                <CreatorsComponent index={4} avatar={avatar4} name='Keepitreal' sales={34.53} />
                <CreatorsComponent index={5} avatar={avatar5} name='Keepitreal' sales={34.53} />
                <CreatorsComponent index={6} avatar={avatar6} name='Keepitreal' sales={34.53} />
                <CreatorsComponent index={7} avatar={avatar1} name='Keepitreal' sales={34.53} />
                <CreatorsComponent index={8} avatar={avatar2} name='Keepitreal' sales={34.53} />

            </div>
        </div>
    );
};

export default TopCreators;