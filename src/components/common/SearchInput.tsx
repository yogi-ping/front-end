import React from 'react';
import searchIcon from '../../assets/search.svg'; // 검색 아이콘 경로

interface SearchInputProps {
    searchTerm: string;
    onSearch: (value: string) => void;
    placeholder?: string;
    className?: string; // 클래스명을 받아서 크기 등을 조정할 수 있도록 추가
}

const SearchInput: React.FC<SearchInputProps> = ({
    searchTerm,
    onSearch,
    placeholder,
    className,
}) => (
    <div
        className={`relative w-full bg-gray-100 rounded-full overflow-hidden ${className}`}
    >
        <img
            className='absolute w-4 h-4 top-1/2 left-3 transform -translate-y-1/2'
            alt='Search'
            src={searchIcon}
        />
        <input
            type='text'
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            className='w-full h-full pl-10 bg-gray-100 text-gray-700 text-sm focus:outline-none rounded-full'
            placeholder={placeholder || '검색'}
        />
    </div>
);

export default SearchInput;
