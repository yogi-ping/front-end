import React from 'react';
import SearchInput from '../common/SearchInput'; // 공통 SearchInput 컴포넌트 사용

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => (
    <SearchInput
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        placeholder='어디로 여행을 떠나시나요?'
        className='w-full max-w-md h-13' // 검색바 크기를 여기서 조정
    />
);

export default SearchBar;
