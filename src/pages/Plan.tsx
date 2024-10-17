import React, { useState } from 'react';
import { IndexSidemenu } from '../components/plan/sidemenu/IndexSidemenu';
import { PlaceList } from '../components/plan/selectplace/PlaceList';
import DetailPlan from '../components/plan/detailplan/index';
import MapComponent from '../components/common/MapComponent'; // MapComponent 임포트

// plan 컴포넌트를 최상위 컴포넌트로 설정
// daterange 상태 정의
interface DateRange {
    from: Date | undefined;
    to: Date | undefined;
}

// handleDateRangeChange 함수 정의 (daterange를 업데이트하는 함수)
// 이 상태와 함수가 자식 컴포넌트들에게 props로 전달
export const Plan: React.FC = () => {
    const [dateRange, setDateRange] = useState<DateRange>({
        from: undefined,
        to: undefined,
    });

    const handleDateRangeChange = (newDateRange: DateRange) => {
        setDateRange(newDateRange);
    };

    return (
        <div className='w-full flex h-screen'>
            {' '}
            {/* h-screen 추가 */}
            <IndexSidemenu dateRange={dateRange} />
            <div className='flex flex-col w-[30%] h-full'>
                {' '}
                {/* h-full 추가 */}
                <DetailPlan onDateRangeChange={handleDateRangeChange} />
                <PlaceList />
            </div>
            <div className='flex-grow h-full'>
                {' '}
                {/* 지도 영역을 전체 높이를 차지하도록 설정 */}
                <MapComponent
                    center={{ lat: 33.4996, lng: 126.5312 }} // 제주도 위치
                    radius={1000}
                    placeType='tourist_attraction'
                />
            </div>
        </div>
    );
};
