import Image, { StaticImageData } from 'next/image';
import React from 'react';

const AuthInput = ({ icon, placeholder, type, onChange, value, name, borderColor }: {
    icon: StaticImageData, placeholder: string, type: string, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string; name: string; borderColor?: string
}) => {
    return (
        <div className='AuthInput relative w-full '>
            <input placeholder={placeholder} type={type}
                onChange={onChange}
                value={value}
                name={name}
                className={`xl:w-8/12 lg:w-11/12 w-full py-3 pl-12 rounded-[20px] focus:outline-none 3xl:text-lg text-black border border-${borderColor}`} />
            <Image src={icon} alt='icon' className='absolute left-4 top-1/2 -translate-y-1/2' />
        </div>
    );
};

export default AuthInput;