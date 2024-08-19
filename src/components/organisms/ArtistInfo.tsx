import { StaticImageData } from 'next/image';
import React from 'react';

type linksType = { icon: StaticImageData, link: string }[]

const ArtistInfo = ({ profilePic, name, volume, soldNfts, followers, bio, links }:
    { profilePic: StaticImageData, name: string, volume: string | number, soldNfts: string | number, followers: string | number, bio: string, links: linksType }
) => {
    return (
        <div className='ArtistInfo'>

        </div>
    );
};

export default ArtistInfo;