import React from 'react';
import { FaCheck, FaPlus } from 'react-icons/fa';

interface SelectPlaceProps {
    isSelected: boolean;
    onSelect: () => void;
}

const SelectPlace: React.FC<SelectPlaceProps> = ({ isSelected, onSelect }) => {
    return (
        <div className='flex items-center' onClick={onSelect}>
            {isSelected ? (
                <FaCheck className='text-blue-500' size={24} /> // 선택된 경우 체크 아이콘
            ) : (
                <FaPlus className='text-gray-500' size={24} /> // 선택되지 않은 경우 플러스 아이콘
            )}
        </div>
    );
};

export default SelectPlace;
