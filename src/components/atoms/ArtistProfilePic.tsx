import Image, { StaticImageData } from 'next/image';
import React from 'react';

const ArtistProfilePic = ({ picture }: { picture: StaticImageData }) => {
    return (
        <Image src={picture} alt='profilePicture' className='ArtistProfilePic size-28 rounded-2xl absolute sm:-top-16 top-0 sm:left-0 left-1/2 -translate-x-1/2 sm:-translate-x-0 sm:-translate-y-0 -translate-y-1/2 border-2 border-[#2B2B2B]' />
    );
};

export default ArtistProfilePic;