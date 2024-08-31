'use client';
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import localFont from 'next/font/local'
import NFTComponent from '../molecules/NFTComponent';
import image1 from '@/assets/images/Image1.png'
import avatar1 from '@/assets/images/Avatar1.png'
import avatar2 from '@/assets/images/Avatar2.png'
import avatar3 from '@/assets/images/Avatar3.png'
import avatar4 from '@/assets/images/Avatar4.png'
import avatar5 from '@/assets/images/Avatar5.png'
import avatar6 from '@/assets/images/Avatar6.png'
import image6 from '@/assets/images/Image9.png'
import fox from '@/assets/images/foxMini.png'
import RankingsTable from './RankingsTable';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


const CreatorsRankings = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    const artistData = [
        {
            rank: 1,
            artist: "Jaydon Ekstrom Bothman",
            change: "+1.41%",
            nftsSold: 602,
            volume: "12.4 ETH",
            avatar: avatar1,
        },
        {
            rank: 2,
            artist: "Artist Two",
            change: "-0.5%",
            nftsSold: 450,
            volume: "10.0 ETH",
            avatar: avatar2,
        },
        {
            rank: 3,
            artist: "Artist Three",
            change: "+2.0%",
            nftsSold: 300,
            volume: "8.5 ETH",
            avatar: avatar3,
        },
    ];

    const artistData2 = [
        {
            rank: 1,
            artist: "Jaydon Ekstrom Bothman",
            change: "+1.41%",
            nftsSold: 602,
            volume: "12.4 ETH",
            avatar: avatar1,
        },
        {
            rank: 2,
            artist: "Artist Two",
            change: "-0.5%",
            nftsSold: 450,
            volume: "10.0 ETH",
            avatar: avatar2,
        },
    ];

    function CustomTabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
            </div>
        );
    }

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    return (
        <div className='creatorsRankings w-full'>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label={
                            <div className='flex flex-row gap-3 items-center'>
                                <p className=' normal-case'>
                                    Today
                                </p>
                            </div>
                        } {...a11yProps(0)} style={{ fontFamily: '__WorkSans_425ff2', fontSize: '21px' }} />
                        <Tab label={
                            <div className='flex flex-row gap-3 items-center'>
                                <p className='normal-case'>
                                    This Week
                                </p>
                            </div>
                        } {...a11yProps(1)} style={{ fontFamily: '__WorkSans_425ff2', fontSize: '21px' }} />

                        <Tab label={
                            <div className='flex flex-row gap-3 items-center'>
                                <p className='normal-case'>
                                    This Month
                                </p>
                            </div>
                        } {...a11yProps(1)} style={{ fontFamily: '__WorkSans_425ff2', fontSize: '21px' }} />

                        <Tab label={
                            <div className='flex flex-row gap-3 items-center'>
                                <p className='normal-case'>
                                    All Time
                                </p>
                            </div>
                        } {...a11yProps(1)} style={{ fontFamily: '__WorkSans_425ff2', fontSize: '21px' }} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <div className=' mt-4 w-10/12'>
                        <RankingsTable artistData={artistData} />
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <div className=' mt-4 w-10/12'>
                        <RankingsTable artistData={artistData2} />
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <div className=' mt-4 w-10/12'>
                        <RankingsTable artistData={artistData2} />
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <div className=' mt-4 w-10/12'>
                        <RankingsTable artistData={artistData} />
                    </div>
                </CustomTabPanel>
            </Box>


            <style>
                {
                    `
                    
                    .css-1gsv261 {
                    margin-top : 70px;
                    padding-top : 15px;
                    }

                    .css-1h9z7r5-MuiButtonBase-root-MuiTab-root {
                    max-width : none;
                    }

                    .css-1ujnqem-MuiTabs-root {
                    padding: 0px 176px;
                    
                    }

                    .css-19kzrtu {
                        background: #2B2B2B !important;
                      }
                    `
                }
            </style>

        </div>
    );
};

export default CreatorsRankings;