import Image from 'next/image';
import React from 'react';
import image from '@/assets/images/Image4.png'
import CreateAccountForms from './CreateAccountForms';

const CreateAccount = () => {
    return (
        <div className='CreateAccount flex flex-row gap-14 w-full mt-7 items-center'>
            <Image src={image} alt='image' className='flex-1' unoptimized />

            <div className='flex-1 -translate-y-6'>
                <CreateAccountForms />
            </div>
        </div>
    );
};

export default CreateAccount;