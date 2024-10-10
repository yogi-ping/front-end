import React from 'react';
import { Header } from './header/Header';
import CardList from './planlist/CardList';
import WeatherDateRangePicker from '../calendar/WeatherDateRangePicker';
interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}
//plan->heather로 handledaterangechange함수가 ondaterangechangeprops으로 header에 전달
interface HeaderProps {
  onDateRangeChange: (dateRange: DateRange) => void;
}

const index: React.FC<HeaderProps> = ({ onDateRangeChange }) => {
  const handleDateRangeChange = (newDateRange: DateRange) => {
    onDateRangeChange(newDateRange);
  };

  return (
    <div className="w-[400px] flex flex-col px-[35px] py-[20px]">
      <Header />
      <CardList />
      <div className="flex justify-start items-start">
        {/* heather에서 받은 ondaterangechange함수 그대로 캘린더에 전달 */}
        <WeatherDateRangePicker onDateRangeChange={handleDateRangeChange} />
      </div>
    </div>
  );
};

export default index;
