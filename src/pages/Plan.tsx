import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IndexSidemenu } from '../components/plan/sidemenu/IndexSidemenu';
import { PlaceList } from '../components/plan/selectplace/PlaceList';
import DetailPlan from '../components/plan/detailplan/index';
import MapComponent from '../components/common/MapComponent';

interface DateRange {
    from: Date | undefined;
    to: Date | undefined;
}

export const Plan: React.FC = () => {
    const location = useLocation();
    const selectedCity = location.state?.selectedCity || '제주';  // 기본값으로 '제주' 설정

    const [dateRange, setDateRange] = useState<DateRange>({
        from: undefined,
        to: undefined,
    });

    const handleDateRangeChange = (newDateRange: DateRange) => {
        setDateRange(newDateRange);
    };

    return (
        <div className='w-full flex h-screen'>
            <IndexSidemenu dateRange={dateRange} />
            <div className='flex flex-col w-[30%] h-full'>
                <DetailPlan 
                    onDateRangeChange={handleDateRangeChange} 
                    selectedCity={selectedCity}
                />
                <PlaceList />
            </div>
            <div className='flex-grow h-full'>
                <MapComponent
                    center={{ lat: 33.4996, lng: 126.5312 }} // 제주도 위치
                    radius={1000}
                    placeType='tourist_attraction'
                />
            </div>
        </div>
    );
};