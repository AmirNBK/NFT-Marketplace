import Image, { StaticImageData } from 'next/image';
import React from 'react';

const ArtistProfilePic = ({ picture }: { picture: StaticImageData }) => {
    return (
        <Image src={picture} alt='profilePicture' className='ArtistProfilePic size-28 rounded-2xl absolute -top-16 border-2 border-[#2B2B2B]' />
    );
};

export default ArtistProfilePic;