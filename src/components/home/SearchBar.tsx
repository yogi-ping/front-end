// home/SearchBar.tsx
import React from 'react';
import searchIcon from '../../assets/search.svg';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => (
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

export default SearchBar;
