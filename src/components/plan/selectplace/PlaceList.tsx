import React, { useState } from 'react';
import PlaceListItem, { placesData, Place } from './PlaceListItem'; // PlaceListItem에서 데이터 가져오기
import SearchBar from './SearchBar'; // 검색바

export const PlaceList: React.FC = () => {
    const [places, setPlaces] = useState<Place[]>(placesData); // Place 데이터를 관리
    const [searchTerm, setSearchTerm] = useState(''); // 검색어 관리

    const handleSelectPlace = (id: number) => {
        setPlaces((prev) =>
            prev.map((place) =>
                place.id === id
                    ? { ...place, isSelected: !place.isSelected }
                    : place
            )
        );
    };

    const filteredPlaces = places.filter((place) =>
        place.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='w-[600px] flex flex-col px-[35px] py-[20px]'>
            <div className='flex py-[20px] items-center'>
                <p className='text-[20px] font-semibold mr-[5px]'>장소 선택</p>
            </div>

            {/* 검색바 */}
            <div className='py-[20px]'>
                <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
            </div>

            {/* 장소 리스트 */}
            <ul className='space-y-2 overflow-y-auto'>
                {filteredPlaces.map((place) => (
                    <PlaceListItem
                        key={place.id}
                        place={place}
                        onSelect={() => handleSelectPlace(place.id)} // 선택 로직 전달
                    />
                ))}
            </ul>
        </div>
    );
};

export default PlaceList;
