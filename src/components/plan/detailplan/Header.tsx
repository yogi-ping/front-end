import React, { useState } from 'react';
import Calendar from '../../../assets/Calendar.svg';

export const Header = () => {
  const [travelDestination, setTravelDestination] = useState<string>('제주');
  const [travelTerm, setTravelTerm] = useState<string>(
    '2024.09.04(수) ~ 2024.09.06(금)'
  );
  return (
    <div className="w-[400px] flex flex-col px-[35px] py-[20px]">
      <div className="flex justify-between mb-[15px]">
        <h1 className="text-3xl font-bold">{travelDestination}</h1>
        <div className="flex justify-center items-center">
          <p className="text-[20px] font-semibold mr-[5px]">장소추가</p>
          <button className="w-[50px] h-[30px] bg-[#fed766] rounded-[100px] px-4 py-2"></button>
        </div>
      </div>

      <div className="flex justify-start items-center">
        <p className="text-[18px] font-semibold mr-[10px]">{travelTerm}</p>
        <img src={Calendar} className="w-[27px] h-[27px]" />
      </div>
    </div>
  );
};
