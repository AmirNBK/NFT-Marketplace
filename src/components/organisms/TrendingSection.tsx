import React from 'react';
import localFont from 'next/font/local'
import Statistics from '../atoms/Statistics';
import TrendingSectionItem from '../molecules/TrendingSectionItem';
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
import animalImage1 from '@/assets/images/Primary Photo Placeholder.jpg'
import animalImage2 from '@/assets/images/Secondary Photo Placeholder.jpg'
import animalImage3 from '@/assets/images/Third Photo Placeholder.jpg'
import foxProfile from '@/assets/images/foxMini.png'



const TrendingSection = () => {
    return (
        <div className={`${WorkSans.className} TrendingSection w-full text-white lg:mt-36 mt-24`}>
            <h2 className='TrendingSection__title text-3xl mb-3'>
                Trending Collection
            </h2>
            <p className={`${WorkSansRegular.className} TrendingSection__description text-base`}>
                Checkout our weekly updated trending collection.
            </p>

            {/* Desktop size */}
            <div className='lg:grid hidden grid-cols-3 mt-10 gap-12'>
                <TrendingSectionItem images={[animalImage1, animalImage2, animalImage3]} title='DSGN Animals' creator='MrFox' creatorPic={foxProfile} morePicsAmount={1025} />
                <TrendingSectionItem images={[animalImage1, animalImage2, animalImage3]} title='Magic Mushrooms' creator='Shroomie' creatorPic={foxProfile} morePicsAmount={1025} />
                <TrendingSectionItem images={[animalImage1, animalImage2, animalImage3]} title='Disco Machines' creator='BeKind2Robots' creatorPic={foxProfile} morePicsAmount={1025} />
            </div>

            {/* Tablet size */}
            <div className='lg:hidden grid grid-cols-2 mt-10 gap-12'>
                <TrendingSectionItem images={[animalImage1, animalImage2, animalImage3]} title='DSGN Animals' creator='MrFox' creatorPic={foxProfile} morePicsAmount={1025} />
                <TrendingSectionItem images={[animalImage1, animalImage2, animalImage3]} title='Magic Mushrooms' creator='Shroomie' creatorPic={foxProfile} morePicsAmount={1025} />
            </div>
        </div>
    );
};

export default TrendingSection;