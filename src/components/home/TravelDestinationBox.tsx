import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 import
import locationIcon from '../../assets/location.svg';
import { locations } from './TravelDestinationItem';

const TravelDestinationBox: React.FC = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용
    const [selectedCity, setSelectedCity] = useState<string>(''); // 선택된 도시 상태

    const handleClick = (name: string) => {
        setSelectedCity(name); // 도시 선택
        navigate('/plan', { state: { selectedCity: name } }); // 선택된 도시를 plan 페이지로 전달
    };

    return (
        <div className='w-full max-w-md'>
            {locations.map((location, index) => (
                <LocationButton
                    key={location.name}
                    name={location.name}
                    country={location.country}
                    roundedTop={index === 0}
                    roundedBottom={index === locations.length - 1}
                    onClick={() => handleClick(location.name)} // 버튼 클릭 시 도시 선택
                />
            ))}
        </div>
    );
};

const LocationButton = ({
    name,
    country,
    roundedTop,
    roundedBottom,
    onClick,
}: {
    name: string;
    country: string;
    roundedTop?: boolean;
    roundedBottom?: boolean;
    onClick: () => void;
}): JSX.Element => {
    return (
        <button
            onClick={onClick} // 클릭 이벤트 추가
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
};

export default TravelDestinationBox;
