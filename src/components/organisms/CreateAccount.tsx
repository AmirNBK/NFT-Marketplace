import Image from 'next/image';
import React from 'react';
import image from '@/assets/images/Image4.png'
import CreateAccountForms from './CreateAccountForms';

const CreateAccount = () => {
    return (
        <div className='CreateAccount flex sm:flex-row flex-col lg:gap-14 gap-8 w-full mt-7 sm:mb-0 mb-7 lg:items-center items-stretch sm:pr-6'>
            <Image src={image} alt='image' className='sm:w-1/2 w-full object-cover' unoptimized />

            <div className=' -translate-y-6 lg:mt-0 sm:mt-16 mt-6 sm:px-0 px-8'>
                <CreateAccountForms />
            </div>
        </div>
    );
};

export default CreateAccount;