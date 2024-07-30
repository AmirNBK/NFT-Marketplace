import React from 'react';
import localFont from 'next/font/local'
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
import categoryPic1 from '@/assets/images/category1.png'
import categoryPic2 from '@/assets/images/category2.png'
import categoryPic3 from '@/assets/images/category3.png'
import categoryPic4 from '@/assets/images/category4.png'
import CategoriesComponent from '../molecules/CategoriesComponent';
import swatches from '@/assets/icons/Swatches.svg'
import brush from '@/assets/icons/PaintBrush.svg'
import music from '@/assets/icons/MusicNotes.svg'
import camera from '@/assets/icons/Camera.svg'



const CategoriesSection = () => {
    return (
        <div className='CategoriesSection text-white w-full mt-32'>
            <h3 className={`${WorkSans.className} text-4xl`}>
                Browse Categories
            </h3>

            <div className=' mt-12 grid grid-cols-4 gap-8'>
                <CategoriesComponent category='Art' image={categoryPic4} icon={brush} />
                <CategoriesComponent category='Collectibles' image={categoryPic1} icon={swatches} />
                <CategoriesComponent category='Music' image={categoryPic2} icon={music} />
                <CategoriesComponent category='Photography' image={categoryPic3} icon={camera} />


            </div>
        </div>
    );
};

export default CategoriesSection;