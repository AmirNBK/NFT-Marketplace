import Image from 'next/image';
import React from 'react';
import image from '@/assets/images/Image4.png'
import CreateAccountForms from './CreateAccountForms';

const CreateAccount = () => {
    return (
        <div className='CreateAccount flex flex-row gap-4 w-full mt-6'>
            <Image src={image} alt='image' className='flex-1' unoptimized />

            <div className='flex-1'>
                <CreateAccountForms />
            </div>
        </div>
    );
};

export default CreateAccount;