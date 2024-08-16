import React from 'react';
import localFont from 'next/font/local'
import AuthInput from '../molecules/AuthInput';
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
const spaceMono = localFont({ src: '../../assets/fonts/SpaceMono-Bold.ttf' })
import user from '@/assets/icons/UserGray.svg'
import email from '@/assets/icons/EmailGray.svg'
import lock from '@/assets/icons/LockKey.svg'
import PrimaryButton from '../atoms/PrimaryButton';

const CreateAccountForms = () => {
    return (
        <div className={`text-white CreateAccountForms flex flex-col gap-5 w-9/12`}>
            <h2 className={`text-5xl ${WorkSans.className}`}>
                Create account
            </h2>

            <p className={`${WorkSansRegular.className} text-xl`}>
                Welcome! enter your details and start creating, collecting and selling NFTs.
            </p>

            <div className='flex flex-col gap-5 mt-5'>
                <AuthInput placeholder='Username' icon={user} />
                <AuthInput placeholder='Email Address' icon={email} />
                <AuthInput placeholder='Password' icon={lock} />
                <AuthInput placeholder='Confirm Password' icon={lock} />
            </div>
            
            <div className='mt-3'>
            <PrimaryButton text='Create account' hasIcon={false} width='8/12' />
            </div>

        </div>
    );
};

export default CreateAccountForms;