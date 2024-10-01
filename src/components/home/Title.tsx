// home/Title.tsx
import React from 'react';

const Title: React.FC = () => (
  <div className='text-center mt-12'>
    <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-tight'>
      실시간 공유 여행 플래너
    </h1>
    <p className='mt-3 text-base md:text-lg text-gray-600'>
      친구와 함께 여행 계획을 실시간으로 공유해보세요.
    </p>
  </div>
);

export default Title;
