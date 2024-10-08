'use client';
import React, { useState } from 'react';
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import localFont from 'next/font/local'
import image1 from '@/assets/images/Image1.png'
import image2 from '@/assets/images/Image2.png'
import image3 from '@/assets/images/Image3.png'
import image4 from '@/assets/images/Image7.png'
import image5 from '@/assets/images/Image8.png'
import image6 from '@/assets/images/Image9.png'
import fox from '@/assets/images/foxMini.png'
const spaceMono = localFont({ src: '../../assets/fonts/SpaceMono-Regular.ttf' })
import MarketplaceSearchBar from '../organisms/MarketplaceSearchBar';
import NFTComponent from '../molecules/NFTComponent';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


const MarketplaceTemplate = () => {
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
        <main className="flex min-h-screen flex-col pt-8  bg-[#2B2B2B] justify-between">
            <div className="xl:px-28 lg:px-20 sm:px-14 px-8 w-full">
                <Header />
            </div>
            <div className='w-full sm:mt-20 mt-10'>
                <MarketplaceSearchBar />
            </div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label={
                            <div className='flex flex-row gap-3 items-center'>
                                <p className=' normal-case'>
                                    NFTs
                                </p>
                                <div className={`${spaceMono.className} amount rounded-2xl text-sm text-white px-2 py-1  sm:block hidden`}>
                                    302
                                </div>
                            </div>
                        } {...a11yProps(0)} style={{ fontFamily: '__WorkSans_425ff2', fontSize: '21px' }} />
                        <Tab label={
                            <div className='flex flex-row gap-3 items-center'>
                                <p className='normal-case'>
                                    Collections
                                </p>
                                <div className={`${spaceMono.className} amount rounded-2xl text-sm text-white px-2 py-1  sm:block hidden`}>
                                    67
                                </div>
                            </div>
                        } {...a11yProps(1)} style={{ fontFamily: '__WorkSans_425ff2', fontSize: '21px' }} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <div className=' grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-14 gap-10 xl:w-10/12 w-11/12'>
                        <NFTComponent bgColor='#2B2B2B' image={image1} title='Distant Galaxy' creatorPic={fox} creator='MoonDancer' price={1.63} bid={0.33} />
                        <NFTComponent bgColor='#2B2B2B' image={image2} title='Life On Edena' creatorPic={fox} creator='NebulaKid' price={1.63} bid={0.33} />
                        <NFTComponent bgColor='#2B2B2B' image={image3} title='AstroFiction' creatorPic={fox} creator='Spaceone' price={1.63} bid={0.33} />
                        <NFTComponent bgColor='#2B2B2B' image={image4} title='Distant Galaxy' creatorPic={fox} creator='MoonDancer' price={1.63} bid={0.33} />
                        <NFTComponent bgColor='#2B2B2B' image={image5} title='Life On Edena' creatorPic={fox} creator='NebulaKid' price={1.63} bid={0.33} />
                        <NFTComponent bgColor='#2B2B2B' image={image6} title='AstroFiction' creatorPic={fox} creator='Spaceone' price={1.63} bid={0.33} />
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <div className=' grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-14 gap-10 xl:w-10/12 w-11/12'>
                        <NFTComponent bgColor='#2B2B2B' image={image1} title='Distant Galaxy' creatorPic={fox} creator='MoonDancer' price={1.63} bid={0.33} />
                        <NFTComponent bgColor='#2B2B2B' image={image6} title='AstroFiction' creatorPic={fox} creator='Spaceone' price={1.63} bid={0.33} />
                    </div>
                </CustomTabPanel>
            </Box>

            <Footer />


            <style>
                {
                    `
                    
                    .css-1gsv261 {
                    margin-top : 70px;
                    border-top : 1px solid #3B3B3B;
                    padding-top : 15px;
                    }

                    .css-1h9z7r5-MuiButtonBase-root-MuiTab-root {
                    max-width : none;
                    }

                    .css-1ujnqem-MuiTabs-root {
                    padding: 0px 176px;

                    @media all and (max-width: 1024px) {
                        padding: 0px 80px;

                    }

                    @media all and (max-width: 640px) {
                        padding: 0px 10px;

                    }
                    
                    }
                    `
                }
            </style>

        </main>
    );
};

export default MarketplaceTemplate;