import React from 'react';
import { Logo } from './Logo';
import { TravelDays } from './TravelDays';
import { Friends } from './Friends';

interface IndexSidemenuProps {
  dateRange: {
    from: Date | undefined;
    to: Date | undefined;
  };
}
//업데이트된 daterange가 indexmenu를 통해 traveldays로 전달
export const IndexSidemenu: React.FC<IndexSidemenuProps> = ({ dateRange }) => {
  return (
    <div className="w-40 flex flex-col items-center">
      <Logo />
      <TravelDays dateRange={dateRange} />
      <Friends />
    </div>
  );
};