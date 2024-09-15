'use client';
import React, { useEffect, useState } from 'react';
import localFont from 'next/font/local'
const spaceMono = localFont({ src: '../../assets/fonts/SpaceMono-Bold.ttf' })
const spaceMonoRegular = localFont({ src: '../../assets/fonts/SpaceMono-Regular.ttf' })


interface TimeUnit {
    value: number;
    label: string;
}

type TimerProps = {
    bgColor: string
    button?: React.HTMLProps<HTMLDivElement>
}

const AuctionTimer: React.FC<TimerProps> = ({ bgColor, button }) => {
    const [timerSecond, setTimerSecond] = useState(59);
    const [timerMinute, setTimerMinute] = useState(59);
    const [timerHour, setTimerHour] = useState(59);

    const timeUnits: TimeUnit[] = [
        { value: timerHour, label: 'Hours' },
        { value: timerMinute, label: 'Minutes' },
        { value: timerSecond, label: 'Seconds' },
    ];

    useEffect(() => {
        const timerIntervalSecond = setInterval(() => {
            setTimerSecond(prevSecond => {
                if (prevSecond > 0) {
                    return prevSecond - 1;
                } else {
                    return 59;
                }
            });
        }, 1000);

        return () => clearInterval(timerIntervalSecond);
    }, []);

    useEffect(() => {
        const timerIntervalMin = setInterval(() => {
            setTimerMinute(prevMin => {
                if (prevMin > 0) {
                    return prevMin - 1;
                } else {
                    return 59;
                }
            });
        }, 60000);

        return () => clearInterval(timerIntervalMin);
    }, []);

    return (
        <div 
        style={{backgroundColor : `${bgColor}`}}
        className={`${spaceMono.className} flex flex-col p-8 text-white rounded-3xl bg-opacity-50 min-w-[240px] w-[295px] max-md:px-5`}>
            <div className={`${spaceMonoRegular.className} text-xs leading-none`}>Auction ends in:</div>
            <div className="flex gap-2.5 items-start mt-2.5 w-full whitespace-nowrap">
                {timeUnits.map((unit, index) => (
                    <React.Fragment key={unit.label}>
                        <div className="flex flex-col flex-1 shrink basis-0">
                            <div className="text-4xl font-bold leading-tight capitalize">
                                {unit.value.toString().padStart(2, '0')}
                            </div>
                            <div className={`${spaceMonoRegular.className} flex-1 mt-1.5 text-xs leading-none`}>{unit.label}</div>
                        </div>
                        {index < timeUnits.length - 1 && (
                            <div className="text-3xl font-bold leading-snug capitalize">:</div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            <>
                {button}
            </>
        </div>
    );
};

export default AuctionTimer;
