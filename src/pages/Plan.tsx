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
        <div className='w-full h-screen flex'>
            {/* 각 컴포넌트를 가로로 나열 */}
            <div className='flex flex-row'>
                {/* 좌측 사이드 메뉴 (고정된 너비) */}
                <div className='w-[150px]'>
                    <IndexSidemenu dateRange={dateRange} />
                </div>

                {/* 디테일 플랜 (고정된 너비) */}
                <div className='w-[380px]'>
                    <DetailPlan onDateRangeChange={handleDateRangeChange} />
                </div>

                {/* 장소 리스트 (고정된 너비) */}
                <div className='w-[600px]'>
                    <PlaceList />
                </div>
            </div>

            {/* 지도 영역 (남는 공간을 모두 차지) */}
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
