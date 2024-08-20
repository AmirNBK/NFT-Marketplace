'use client';
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import localFont from 'next/font/local'
import CreatorsComponent from '../molecules/CreatorsComponent';
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
const spaceMono = localFont({ src: '../../assets/fonts/SpaceMono-Regular.ttf' })
import image1 from '@/assets/images/Image1.png'
import image2 from '@/assets/images/Image2.png'
import image3 from '@/assets/images/Image3.png'
import image4 from '@/assets/images/Image7.png'
import image5 from '@/assets/images/Image8.png'
import image6 from '@/assets/images/Image9.png'
import fox from '@/assets/images/foxMini.png'
import NFTComponent from '../molecules/NFTComponent';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const ArtistArts = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

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
        <div className={`${WorkSansRegular.className} ArtistArts w-full`}>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label={
                            <div className='flex flex-row gap-3 items-center'>
                                <p className=' normal-case'>
                                    Created
                                </p>
                                <div className={`${spaceMono.className} amount rounded-2xl text-sm text-white px-2 py-1`}>
                                    302
                                </div>
                            </div>
                        } {...a11yProps(0)} style={{ fontFamily: '__WorkSans_425ff2', fontSize: '18px' }} />
                        <Tab label={
                            <div className='flex flex-row gap-3 items-center'>
                                <p className='normal-case'>
                                    Owned
                                </p>
                                <div className={`${spaceMono.className} amount rounded-2xl text-sm text-white px-2 py-1`}>
                                    67
                                </div>
                            </div>
                        } {...a11yProps(1)} style={{ fontFamily: '__WorkSans_425ff2', fontSize: '18px' }} />
                        <Tab label={
                            <div className='flex flex-row gap-3 items-center'>
                                <p className=' normal-case'>
                                    Collection
                                </p>
                                <div className={`${spaceMono.className} amount rounded-2xl text-sm text-white px-2 py-1`}>
                                    4
                                </div>
                            </div>
                        } {...a11yProps(2)} style={{ fontFamily: '__WorkSans_425ff2', fontSize: '18px' }} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>

                    <div className=' grid grid-cols-3 mt-14 gap-10 w-10/12'>
                        <NFTComponent bgColor='#2B2B2B' image={image1} title='Distant Galaxy' creatorPic={fox} creator='MoonDancer' price={1.63} bid={0.33} />
                        <NFTComponent bgColor='#2B2B2B' image={image2} title='Life On Edena' creatorPic={fox} creator='NebulaKid' price={1.63} bid={0.33} />
                        <NFTComponent bgColor='#2B2B2B' image={image3} title='AstroFiction' creatorPic={fox} creator='Spaceone' price={1.63} bid={0.33} />
                        <NFTComponent bgColor='#2B2B2B' image={image4} title='Distant Galaxy' creatorPic={fox} creator='MoonDancer' price={1.63} bid={0.33} />
                        <NFTComponent bgColor='#2B2B2B' image={image5} title='Life On Edena' creatorPic={fox} creator='NebulaKid' price={1.63} bid={0.33} />
                        <NFTComponent bgColor='#2B2B2B' image={image6} title='AstroFiction' creatorPic={fox} creator='Spaceone' price={1.63} bid={0.33} />
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <div className=' grid grid-cols-3 mt-14 gap-10 w-10/12'>
                        <NFTComponent bgColor='#2B2B2B' image={image1} title='Distant Galaxy' creatorPic={fox} creator='MoonDancer' price={1.63} bid={0.33} />
                        <NFTComponent bgColor='#2B2B2B' image={image6} title='AstroFiction' creatorPic={fox} creator='Spaceone' price={1.63} bid={0.33} />
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <div className=' grid grid-cols-3 mt-14 gap-10 w-10/12'>
                        <NFTComponent bgColor='#2B2B2B' image={image1} title='Distant Galaxy' creatorPic={fox} creator='MoonDancer' price={1.63} bid={0.33} />
                        <NFTComponent bgColor='#2B2B2B' image={image6} title='AstroFiction' creatorPic={fox} creator='Spaceone' price={1.63} bid={0.33} />
                        <NFTComponent bgColor='#2B2B2B' image={image4} title='Distant Galaxy' creatorPic={fox} creator='MoonDancer' price={1.63} bid={0.33} />

                    </div>
                </CustomTabPanel>
            </Box>



            <style>
                {
                    `
                    .css-heg063-MuiTabs-flexContainer { 
                        justify-content: center;
                    }
                    .css-1aquho2-MuiTabs-indicator {
                        background-color : #858584;
                    }
                    .MuiButtonBase-root {
                        flex : 1;
                        color : #858584;

                    }
                    .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
                        color : #fff;

                        .amount {
                        background : #858584;
                        }
                    }

                    .css-1h9z7r5-MuiButtonBase-root-MuiTab-root {
                      .amount {
                        background : #3B3B3B;
                        }
                    }

                    .css-19kzrtu {
                        background : #3B3B3B;
                        display: flex;
    justify-content: center;
    padding-bottom : 90px;
                    }

             .css-8atqhb {
    width: 100%;
    border-bottom: 2px solid #2B2B2B;
}
                    `
                }
            </style>
        </div>
    );
};

export default ArtistArts;