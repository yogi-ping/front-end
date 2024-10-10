import React from 'react';
import Calendar from '../../../../assets/Calendar.svg';
interface TravelTermProps {
  travelTerm: string;
}

const TravelTerm: React.FC<TravelTermProps> = ({ travelTerm }) => {
  return (
    <div className="flex justify-start items-center mb-[31px]">
      <p className="text-[18px] font-semibold mr-[10px]">{travelTerm}</p>
      <img src={Calendar} className="w-[27px] h-[27px]" />
    </div>
  );
};

export default TravelTerm;
