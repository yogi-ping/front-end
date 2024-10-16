import React from 'react';
import { Header } from './header/Header';
import CardList from './planlist/CardList';
import WeatherDateRangePicker from '../calendar/WeatherDateRangePicker';

interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

interface IndexProps {
  onDateRangeChange: (dateRange: DateRange) => void;
  selectedCity: string;
}

const Index: React.FC<IndexProps> = ({ onDateRangeChange, selectedCity }) => {
  return (
    <div className="w-[400px] flex flex-col px-[35px] py-[20px]">
      <Header />
      <CardList />
      <div className="flex justify-start items-start">
        <WeatherDateRangePicker 
          onDateRangeChange={onDateRangeChange} 
          selectedCity={selectedCity} 
        />
      </div>
    </div>
  );
};

export default Index;