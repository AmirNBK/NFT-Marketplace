import Image, { StaticImageData } from 'next/image';
import React from 'react';
import localFont from 'next/font/local'
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })

const CategoriesComponent = ({ category, icon, image }: { category: string, icon: StaticImageData, image: StaticImageData }) => {
    return (
        <div className='CategoriesComponent cursor-pointer rounded-2xl bg-[rgb(59,59,59)]'>
            <div className='relative'>
                <Image src={image} alt='categoryImage' className=' w-fit rounded-t-2xl blur-sm' />
                <Image src={icon} alt='swatches' className=' lg:w-fit w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            <p className={`${WorkSans.className} p-5 text-xl`}>
                {category}
            </p>
        </div>
    );
};

export default CategoriesComponent;