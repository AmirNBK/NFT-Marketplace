import React from 'react';

interface TimeUnit {
  value: number;
  label: string;
}

const AuctionTimer: React.FC = () => {
  const timeUnits: TimeUnit[] = [
    { value: 59, label: 'Hours' },
    { value: 59, label: 'Minutes' },
    { value: 59, label: 'Seconds' },
  ];

  return (
    <div className="flex flex-col p-8 text-white rounded-3xl bg-neutral-700 bg-opacity-50 min-w-[240px] w-[295px] max-md:px-5">
      <div className="text-xs leading-none">Auction ends in:</div>
      <div className="flex gap-2.5 items-start mt-2.5 w-full whitespace-nowrap">
        {timeUnits.map((unit, index) => (
          <React.Fragment key={unit.label}>
            <div className="flex flex-col flex-1 shrink basis-0">
              <div className="text-4xl font-bold leading-tight capitalize">
                {unit.value}
              </div>
              <div className="flex-1 mt-1.5 text-xs leading-none">{unit.label}</div>
            </div>
            {index < timeUnits.length - 1 && (
              <div className="text-3xl font-bold leading-snug capitalize">:</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AuctionTimer;