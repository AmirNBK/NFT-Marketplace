import React from 'react';
import magnify from '@/assets/icons/MagnifyingGlass.svg'
import Image from 'next/image';

const SearchBar = () => {
    return (
        <div className='SearchBar relative w-full'>
            <input placeholder='Search your favorite NFTs' className=' bg-transparent w-full placeholder:#858584 outline-none text-white border border-[#3B3B3B] py-4 pl-4 px-20 rounded-[20px]' />
            <Image src={magnify} alt='magnify' className='absolute right-6 top-1/2 -translate-y-1/2' />
        </div>
    );
};

export default SearchBar;