import Image, { StaticImageData } from 'next/image';
import React from 'react';

const AuthInput = ({ icon, placeholder, type, onChange, value, name }: {
    icon: StaticImageData, placeholder: string, type: string, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string; name: string
}) => {
    return (
        <div className='AuthInput relative w-full'>
            <input placeholder={placeholder} type={type}
                onChange={onChange}
                value={value}
                name={name}
                className=' w-8/12 py-3 pl-12 rounded-[20px] focus:outline-none text-black' />
            <Image src={icon} alt='icon' className='absolute left-4 top-1/2 -translate-y-1/2' />
        </div>
    );
};

export default AuthInput;