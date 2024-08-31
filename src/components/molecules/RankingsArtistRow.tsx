// src/components/molecules/RankingsArtistRow.tsx

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import localFont from 'next/font/local'
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })

interface RankingsArtistRowProps {
    rank: number;
    artist: string;
    change: string;
    nftsSold: number;
    volume: string;
    avatar: StaticImageData;
}

const RankingsArtistRow: React.FC<RankingsArtistRowProps> = ({
    rank,
    artist,
    change,
    nftsSold,
    volume,
    avatar,
}) => {
    return (
        <li className="table-row">
            <div className="col col-1" data-label="Job Id">
                <p className='bg-[#2B2B2B] size-8 text-[#858584] flex justify-center items-center rounded-full'>
                    {rank}
                </p>
            </div>
            <div className="col col-2 flex flex-row items-center gap-2" data-label="Customer Name">
                <Image src={avatar} alt={artist} className='size-12 rounded-full' />
                <p className={`${WorkSans.className} ml-2`}>
                    {artist}
                </p>
            </div>
            <div className="col col-3 text-[#00AC4F]" data-label="Amount">
                {change}
            </div>
            <div className="col col-4" data-label="NFTs Sold">{nftsSold}</div>
            <div className="col col-4" data-label="Volume">{volume}</div>
        </li>
    );
};

export default RankingsArtistRow;