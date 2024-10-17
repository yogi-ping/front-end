import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IndexSidemenu } from '../components/plan/sidemenu/IndexSidemenu';
import { PlaceList } from '../components/plan/selectplace/PlaceList';
import DetailPlan from '../components/plan/detailplan/index';

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
    <div className="w-full flex">
      <IndexSidemenu dateRange={dateRange} />
      <DetailPlan onDateRangeChange={handleDateRangeChange} selectedCity={selectedCity} />
      <PlaceList />
    </div>
  );
};
