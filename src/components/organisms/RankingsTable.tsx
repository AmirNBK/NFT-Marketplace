import React from 'react';
import avatar1 from '@/assets/images/Avatar1.png'
import avatar2 from '@/assets/images/Avatar2.png'
import avatar3 from '@/assets/images/Avatar3.png'
import avatar4 from '@/assets/images/Avatar4.png'
import avatar5 from '@/assets/images/Avatar5.png'
import avatar6 from '@/assets/images/Avatar6.png'
import Image, { StaticImageData } from 'next/image';
import localFont from 'next/font/local'
import RankingsArtistRow from '../molecules/RankingsArtistRow';
const spaceMono = localFont({ src: '../../assets/fonts/SpaceMono-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })

interface Artist {
    rank: number;
    artist: string;
    change: string;
    nftsSold: number;
    volume: string;
    avatar: StaticImageData;
}

interface RankingsTableProps {
    artistData: Artist[];
}

const RankingsTable: React.FC<RankingsTableProps> = ({ artistData }) => {
    
    return (
        <ul className={`${spaceMono.className} responsive-table`}>
            <li className={` border table-header`}>
                <div className="col col-1">#</div>
                <div className="col col-2">Artist</div>
                <div className="col col-3">Change</div>
                <div className="col col-4">NFTs Sold</div>
                <div className="col col-4">Volume</div>
            </li>
            {artistData.map((artist) => (
                <RankingsArtistRow
                    key={artist.rank}
                    rank={artist.rank}
                    artist={artist.artist}
                    change={artist.change}
                    nftsSold={artist.nftsSold}
                    volume={artist.volume}
                    avatar={artist.avatar}
                />
            ))}



            <style>
                {
                    `
                  
                      .responsive-table li {
                        padding: 15px 20px;
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 25px;
                      }
                      .responsive-table .table-header {
                        border-radius: 36px;
                        color : #858584;
                        font-size: 14px;
                        letter-spacing: 0.03em;
                        border-color : #3B3B3B;
                      }
                      .responsive-table .table-row {
                        background-color: #3B3B3B;
                        border-radius: 14px;
                        color : #fff;
                        display : flex;
                        flex-direction : row;
                        align-items : center;
                      }
                      .responsive-table .col-1 {
                        flex-basis: 10%;
                      }
                      .responsive-table .col-2 {
                        flex-basis: 40%;
                      }
                      .responsive-table .col-3 {
                        flex-basis: 25%;
                      }
                      .responsive-table .col-4 {
                        flex-basis: 25%;
                      }
                      @media all and (max-width: 767px) {
                        .responsive-table .table-header {
                          display: none;
                        }
                        .responsive-table li {
                          display: block;
                        }
                        .responsive-table .col {
                          flex-basis: 100%;
                        }
                        .responsive-table .col {
                          display: flex;
                          padding: 10px 0;
                        }
                        .responsive-table .col:before {
                          color: #6C7A89;
                          padding-right: 10px;
                          content: attr(data-label);
                          flex-basis: 50%;
                          text-align: right;
                        }
                      }
                `
                }
            </style>
        </ul>
    );
};

export default RankingsTable;