import React, { useState } from 'react';
import { IndexSidemenu } from '../components/plan/sidemenu/IndexSidemenu';
import { PlaceList } from '../components/plan/selectplace/PlaceList';
import DetailPlan from '../components/plan/detailplan/index';

//plan 컴포넌트를 최상위 컴포넌트로 설정
//daterange상태 정의
interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

//handledaterangechange함수 정의(daterange를 업데이트하는 함수)
//이 상태와 함수가 자식 컴포넌트들에게 props로 전달
export const Plan: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });

  const handleDateRangeChange = (newDateRange: DateRange) => {
    setDateRange(newDateRange);
  };

  return (
    <div className="w-full flex">
      <IndexSidemenu dateRange={dateRange} />
      <DetailPlan onDateRangeChange={handleDateRangeChange} />
      <PlaceList />
    </div>
  );
};
