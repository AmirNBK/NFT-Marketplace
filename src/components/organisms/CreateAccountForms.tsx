"use client";
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
import { useFormik } from 'formik';

const CreateAccountForms = () => {

    const validate = (values: { username: string; email: string; password: string; confPassword: string; }) => {
        const errors: { username?: string; email?: string; password?: string; confPassword?: string } = {};

        if (!values.username) {
            errors.username = 'Required';
        } else if (values.username.length < 3) {
            errors.username = 'Must be 3 characters or more';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 6) {
            errors.password = 'Must be 6 characters or more';
        }

        if (!values.confPassword) {
            errors.confPassword = 'Required';
        } else if (values.confPassword !== values.password) {
            errors.confPassword = 'Passwords must match';
        }

        return errors;
    };


    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confPassword: ''
        },
        validate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={`text-white CreateAccountForms flex flex-col gap-5 w-9/12`}>
            <h2 className={`text-5xl ${WorkSans.className}`}>
                Create account
            </h2>

            <p className={`${WorkSansRegular.className} text-xl`}>
                Welcome! enter your details and start creating, collecting and selling NFTs.
            </p>

            <form onSubmit={formik.handleSubmit}>
                <div className='flex flex-col gap-5 mt-5'>
                    <AuthInput placeholder='Username' icon={user} type='text'
                        name='username'
                        onChange={formik.handleChange}
                        value={formik.values.username}
                    />
                    {formik.errors.username ? <div>{formik.errors.email}</div> : null}

                    <AuthInput placeholder='Email Address' icon={email} type='email'
                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    <AuthInput placeholder='Password' icon={lock} type='password'
                        name='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <AuthInput placeholder='Confirm Password' icon={lock} type='password'
                        name='confPassword'
                        onChange={formik.handleChange}
                        value={formik.values.confPassword}
                    />
                </div>

                <div className='mt-3'>
                    <PrimaryButton text='Create account' hasIcon={false} width='8/12' />
                </div>

            </form>
        </div>
    );
};

export default CreateAccountForms;