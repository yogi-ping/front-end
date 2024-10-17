// Plan.tsx
import React, { useState } from 'react';
import { IndexSidemenu } from '../components/plan/sidemenu/IndexSidemenu';
import { PlaceList } from '../components/plan/selectplace/PlaceList';
import DetailPlan from '../components/plan/detailplan/index';
import MapComponent from '../components/common/MapComponent';
import SelectButton from '../components/common/SelectButton';

// DateRange 인터페이스 정의
interface DateRange {
    from: Date | undefined;
    to: Date | undefined;
}

export const Plan: React.FC = () => {
    // 날짜 범위 상태
    const [dateRange, setDateRange] = useState<DateRange>({
        from: undefined,
        to: undefined,
    });

    const handleDateRangeChange = (newDateRange: DateRange) => {
        setDateRange(newDateRange);
    };

    // 장소 추가 상태 관리
    const [isAddingLocation, setIsAddingLocation] = useState<boolean>(false);

    return (
        <div className='w-full h-screen flex'>
            {/* 각 컴포넌트를 가로로 나열 */}
            <div className='flex flex-row'>
                {/* 좌측 사이드 메뉴 (고정된 너비) */}
                <div className='w-[150px]'>
                    <IndexSidemenu dateRange={dateRange} />
                </div>

                {/* 디테일 플랜 및 버튼 영역 */}
                <div className='w-[380px] flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-center items-center mt-2'>
                            {/* 제주 글자에 margin-left 추가 */}
                            <p className='text-[30px] font-bold mr-40 ml-8'>
                                제주
                            </p>{' '}
                            {/* ml-8로 왼쪽 여백 추가 */}
                            <p className='text-[15px] font-semibold mr-[15px]'>
                                장소추가
                            </p>
                            <SelectButton
                                isAddingLocation={isAddingLocation}
                                setIsAddingLocation={setIsAddingLocation}
                            />
                        </div>
                    </div>

                    {/* DetailPlan 컴포넌트를 살짝 위로 이동 */}
                    <div className='mt-[-20px]'>
                        {/* mt-2로 위쪽 여백을 줄임 */}
                        <DetailPlan onDateRangeChange={handleDateRangeChange} />
                    </div>
                </div>

                {/* 장소 리스트를 isAddingLocation 상태에 따라 조건부 렌더링 */}
                {isAddingLocation && (
                    <div className='w-[600px]'>
                        <PlaceList />
                    </div>
                )}
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

export default Plan;
