import React from 'react';

import CardList from './planlist/CardList';
import WeatherDateRangePicker from '../calendar/WeatherDateRangePicker';
import { useLocation } from 'react-router-dom'; // useLocation 훅 사용

interface DateRange {
    from: Date | undefined;
    to: Date | undefined;
}

interface IndexProps {
    onDateRangeChange: (dateRange: DateRange) => void;
}

const Index: React.FC<IndexProps> = ({ onDateRangeChange }) => {
    const location = useLocation();
    const selectedCity = location.state?.selectedCity || '제주'; // 전달받은 selectedCity가 없을 경우 기본값 제주

    return (
        <div className='w-[400px] flex flex-col px-[35px] py-[20px]'>
            <div className='flex justify-start mt-2 items-start'>
                <WeatherDateRangePicker
                    onDateRangeChange={onDateRangeChange}
                    selectedCity={selectedCity} // 선택된 도시 전달
                />
            </div>
            <div className='flex mt-6'>
                <CardList />
            </div>
        </div>
    );
};

export default Index;
