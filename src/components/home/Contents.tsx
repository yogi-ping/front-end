import searchIcon from '../../assets/search.svg';
import locationIcon from '../../assets/location.svg';
import { useState } from 'react';

export const Contents = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='flex flex-col w-full max-w-screen-xl mx-auto h-auto items-center justify-center gap-12 relative mt-16 transform scale-110'>
      {/* 컨텐츠 상단에 여백 추가 */}
      <div className='flex flex-col items-center gap-12 w-full'>
        <ContentHeader />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <LocationList />
      </div>
    </div>
  );
};

// 헤더 컴포넌트 분리
const ContentHeader = (): JSX.Element => (
  <div className='text-center mt-12'>
    <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-tight'>
      실시간 공유 여행 플래너
    </h1>
    <p className='mt-3 text-base md:text-lg text-gray-600'>
      친구와 함께 여행 계획을 실시간으로 공유해보세요.
    </p>
  </div>
);

// 검색 바 컴포넌트 분리
const SearchBar = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}): JSX.Element => (
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
);

// 버튼 섹션(위치 리스트) 컴포넌트 분리
const LocationList = (): JSX.Element => (
  <div className='w-full max-w-md'>
    {locations.map((location, index) => (
      <LocationButton
        key={location.name}
        name={location.name}
        country={location.country}
        roundedTop={index === 0}
        roundedBottom={index === locations.length - 1}
      />
    ))}
  </div>
);

// 개별 위치 버튼 컴포넌트 분리
const LocationButton = ({
  name,
  country,
  roundedTop,
  roundedBottom,
}: {
  name: string;
  country: string;
  roundedTop?: boolean;
  roundedBottom?: boolean;
}): JSX.Element => (
  <button
    className={`w-full flex items-center gap-3 p-3 bg-gray-100 ${
      roundedTop ? 'rounded-t-2xl' : ''
    } ${
      roundedBottom ? 'rounded-b-2xl' : ''
    } overflow-hidden hover:bg-gray-200 focus:outline-none`}
  >
    <img className='w-8 h-8' alt='Location' src={locationIcon} />
    <div className='flex flex-col text-left'>
      <span className='font-bold text-base text-black'>{name}</span>
      <span className='text-xs text-gray-500'>{country}</span>
    </div>
  </button>
);

// 위치 정보 데이터
const locations = [
  { name: '제주', country: '대한민국' },
  { name: '부산', country: '대한민국' },
  { name: '여수', country: '대한민국' },
];

export default Contents;
