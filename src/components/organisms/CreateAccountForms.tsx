"use client";
import React, { useState } from 'react';
import localFont from 'next/font/local'
import AuthInput from '../molecules/AuthInput';
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
import user from '@/assets/icons/UserGray.svg'
import email from '@/assets/icons/EmailGray.svg'
import lock from '@/assets/icons/LockKey.svg'
import PrimaryButton from '../atoms/PrimaryButton';
import { useFormik } from 'formik';
import { validate } from '@/validators/validation';

const CreateAccountForms = () => {
    const [initialSubmit, setInitialSubmit] = useState(false)

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confPassword: ''
        },
        validate,
        validateOnBlur: false,
        validateOnChange: initialSubmit ? true : false,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={`text-white CreateAccountForms flex flex-col gap-5 lg:w-9/12 w-full 3xl:w-11/12`}>
            <h2 className={`xl:text-5xl text-3xl ${WorkSans.className}`}>
                Create account
            </h2>

            <p className={`${WorkSansRegular.className} lg:text-xl text-base`}>
                Welcome! enter your details and start creating, collecting and selling NFTs.
            </p>

            <form onSubmit={formik.handleSubmit}>
                <div className='flex flex-col gap-5 mt-5'>
                    <AuthInput placeholder='Username' icon={user} type='text'
                        name='username'
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        borderColor={formik.errors.username ? 'red-400' : ''}
                    />
                    {formik.errors.username ? <p className='text-red-400 -my-2 text-sm ml-2'>{formik.errors.username}</p> : null}

                    <AuthInput placeholder='Email Address' icon={email} type='email'
                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        borderColor={formik.errors.email ? 'red-400' : ''}
                    />
                    {formik.errors.email ? <p className='text-red-400 -my-2 text-sm ml-2'>{formik.errors.email}</p> : null}

                    <AuthInput placeholder='Password' icon={lock} type='password'
                        name='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        borderColor={formik.errors.password ? 'red-400' : ''}
                    />
                    {formik.errors.password ? <p className='text-red-400 -my-2 text-sm ml-2'>{formik.errors.password}</p> : null}

                    <AuthInput placeholder='Confirm Password' icon={lock} type='password'
                        name='confPassword'
                        onChange={formik.handleChange}
                        value={formik.values.confPassword}
                        borderColor={formik.errors.confPassword ? 'red-400' : ''}
                    />
                    {formik.errors.confPassword ? <p className='text-red-400 -mt-2 text-sm ml-2'>{formik.errors.confPassword}</p> : null}

                </div>

                <div className='lg:block hidden mt-3'>
                    <PrimaryButton text='Create account' hasIcon={false} width='8/12'
                        onClick={() => {
                            setInitialSubmit(true)
                        }}
                    />
                </div>

                <div className='lg:hidden block mt-8'>
                    <PrimaryButton text='Create account' hasIcon={false} width='full'
                        onClick={() => {
                            setInitialSubmit(true)
                        }}
                    />
                </div>

            </form>
        </div>
    );
};

export default CreateAccountForms;