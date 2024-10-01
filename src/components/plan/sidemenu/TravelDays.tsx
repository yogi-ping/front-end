import React from 'react'

export const TravelDays: React.FC = () => {
  return (
    <div className='w-full flex flex-col items-center mt-20'>
      <div className='w-2/3 h-10 flex justify-center items-center bg-sky-700 rounded-lg mb-4'>
        <span className='text-white text-s'>일정</span>
      </div>
      <div className='w-2/3 h-16 px-6 flex justify-center items-center bg-gray-200 rounded-lg cursor-pointer whitespace-pre'>전체 일정</div>
    </div>
  );
};

