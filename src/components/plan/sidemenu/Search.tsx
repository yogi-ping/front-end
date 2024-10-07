import React from 'react';
import SearchInput from '../../common/SearchInput';

type SearchProps = {
  searchTerm: string;
  onSearch : (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({ searchTerm, onSearch }) => (
    <SearchInput
        searchTerm={ searchTerm }
        onSearch = { onSearch }
        placeholder='검색'
        className='w-full max-w-lg h-10'
    />
);

