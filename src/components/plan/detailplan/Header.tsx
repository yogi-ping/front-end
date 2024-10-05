import React, { useState } from 'react';
import Calendar from '../../../assets/Calendar.svg';
import WeatherDateRangePicker from '../calendar/WeatherDateRangePicker';

interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}
//plan->heather로 handledaterangechange함수가 ondaterangechangeprops으로 header에 전달
interface HeaderProps {
  onDateRangeChange: (dateRange: DateRange) => void;
}

export const Header: React.FC<HeaderProps> = ({ onDateRangeChange }) => {
  const [travelDestination, setTravelDestination] = useState<string>('제주');

  const handleDateRangeChange = (newDateRange: DateRange) => {
    onDateRangeChange(newDateRange);
  };

  return (
    <div className="w-[400px] flex flex-col px-[35px] py-[20px]">
      <div className="flex justify-between mb-[15px]">
        <h1 className="text-3xl font-bold">{travelDestination}</h1>
        <div className="flex justify-center items-center">
          <p className="text-[20px] font-semibold mr-[5px]">장소추가</p>
          <button className="w-[50px] h-[30px] bg-[#fed766] rounded-[100px] px-4 py-2"></button>
        </div>
      </div>
      
      <div className="flex justify-start items-start">
        {/* heather에서 받은 ondaterangechange함수 그대로 캘린더에 전달 */}
        <WeatherDateRangePicker onDateRangeChange={handleDateRangeChange} />
      </div>
    </div>
  );
};