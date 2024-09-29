import React from 'react';
import SearchInput from '../../common/SearchInput'; // 공통 SearchInput 컴포넌트 사용

interface SearchBarProps {
    searchTerm: string;
    onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => (
    <SearchInput
        searchTerm={searchTerm}
        onSearch={onSearch}
        placeholder='검색'
        className='w-full max-w-lg h-10' // 검색바의 크기를 여기서 조정 (w-full, max-w-lg, h-10)
    />
);

export default SearchBar;
