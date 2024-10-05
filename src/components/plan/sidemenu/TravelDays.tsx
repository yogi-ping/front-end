import React from 'react';

interface TravelDaysProps {
  dateRange: {
    from: Date | undefined;
    to: Date | undefined;
  };
}

export const TravelDays: React.FC<TravelDaysProps> = ({ dateRange }) => {
  const getDaysBetweenDates = (startDate: Date, endDate: Date) => {
    const days = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return days;
  };

  const renderScheduleButtons = () => {
    if (dateRange.from && dateRange.to) {
      const days = getDaysBetweenDates(dateRange.from, dateRange.to);
      return days.map((day, index) => (
        <div 
          key={index} 
          className='w-2/3 h-16 px-6 flex justify-center items-center bg-gray-200 rounded-lg cursor-pointer whitespace-pre mb-2'
        >
          {`${index + 1}일차 `}{/* (${day.toLocaleDateString()})*/}
        </div>
      ));
    }
    return null;
  };

  return (
    <div className='w-full flex flex-col items-center mt-20'>
      <div className='w-2/3 h-10 flex justify-center items-center bg-sky-700 rounded-lg mb-4'>
        <span className='text-white text-s'>일정</span>
      </div>
      <div className='w-2/3 h-16 px-6 flex justify-center items-center bg-gray-200 rounded-lg cursor-pointer whitespace-pre mb-2'>
        전체 일정
      </div>
      {renderScheduleButtons()}
    </div>
  );
};