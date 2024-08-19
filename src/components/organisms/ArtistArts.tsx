'use client';
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import localFont from 'next/font/local'
const WorkSansRegular = localFont({ src: '../../assets/fonts/WorkSans-Regular.ttf' })
const WorkSans = localFont({ src: '../../assets/fonts/WorkSans-SemiBold.ttf' })
const spaceMono = localFont({ src: '../../assets/fonts/SpaceMono-Bold.ttf' })

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
                        <Tab label="Created" {...a11yProps(0)} style={{ fontFamily: '__WorkSans_425ff2' , fontSize : '17px' }} />
                        <Tab label="owned" {...a11yProps(1)} style={{ fontFamily: '__WorkSans_425ff2' }} />
                        <Tab label="Collection" {...a11yProps(2)} style={{ fontFamily: '__WorkSans_425ff2' }} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    Item One
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Item Two
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Item Three
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
                    }

                    .css-19kzrtu {
                        background : #3B3B3B;
                    }
                    
                    `
                }
            </style>
        </div>
    );
};

export default ArtistArts;