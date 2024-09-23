import searchIcon from '../assets/search.svg';
import locationIcon from '../assets/location.svg';
import { useState } from 'react';

export const Contents = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='flex flex-col w-full max-w-screen-xl mx-auto h-auto items-center justify-center gap-12 relative mt-16'>
      {' '}
      {/* 컨텐츠 상단에 여백 추가 */}
      <div className='flex flex-col items-center gap-12 w-full'>
        <div className='text-center mt-12'>
          <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-tight'>
            실시간 공유 여행 플래너
          </h1>
          <p className='mt-3 text-base md:text-lg text-gray-600'>
            친구와 함께 여행 계획을 실시간으로 공유해보세요.
          </p>
        </div>

        {/* 검색 입력 창 */}
        <div className='relative w-full max-w-md h-12 bg-gray-100 rounded-full overflow-hidden'>
          <img
            className='absolute w-4 h-4 top-1/2 left-3 transform -translate-y-1/2'
            alt='Search'
            src={searchIcon}
          />
          <input
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full h-full pl-10 bg-gray-100 text-gray-700 text-sm focus:outline-none rounded-full'
            placeholder='어디로 여행을 떠나시나요?'
          />
        </div>

        {/* 버튼 섹션 */}
        <div className='w-full max-w-md'>
          <button className='w-full flex items-center gap-3 p-3 bg-gray-100 rounded-t-2xl overflow-hidden hover:bg-gray-200 focus:outline-none'>
            <img className='w-8 h-8' alt='Location' src={locationIcon} />
            <div className='flex flex-col text-left'>
              {/* 폰트 크기 조정 및 왼쪽 정렬 */}
              <span className='font-bold text-base text-black'>제주</span>
              <span className='text-xs text-gray-500'>대한민국</span>
            </div>
          </button>

          <button className='w-full flex items-center gap-3 p-3 bg-gray-100 border-t border-transparent border-b hover:bg-gray-200 focus:outline-none'>
            <img className='w-8 h-8' alt='Location' src={locationIcon} />
            <div className='flex flex-col text-left'>
              {/* 폰트 크기 조정 및 왼쪽 정렬 */}
              <span className='font-bold text-base text-black'>부산</span>
              <span className='text-xs text-gray-500'>대한민국</span>
            </div>
          </button>

          <button className='w-full flex items-center gap-3 p-3 bg-gray-100 rounded-b-2xl overflow-hidden hover:bg-gray-200 focus:outline-none'>
            <img className='w-8 h-8' alt='Location' src={locationIcon} />
            <div className='flex flex-col text-left'>
              {/* 폰트 크기 조정 및 왼쪽 정렬 */}
              <span className='font-bold text-base text-black'>여수</span>
              <span className='text-xs text-gray-500'>대한민국</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contents;
