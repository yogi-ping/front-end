import React from 'react';
import SelectPlace from './SelectPlace'; // SelectPlace 컴포넌트 임포트

export type Place = {
    id: number;
    name: string;
    category: string;
    rating: number;
    reviews: number;
    isSelected: boolean;
};

export const placesData: Place[] = [
    {
        id: 1,
        name: '리치 망고',
        category: '카페/디저트',
        rating: 9.0,
        reviews: 1092,
        isSelected: true,
    },
    {
        id: 2,
        name: '봄날카페',
        category: '카페/디저트',
        rating: 9.0,
        reviews: 708,
        isSelected: true,
    },
    {
        id: 3,
        name: '서연의 집',
        category: '카페/디저트, 이색장소',
        rating: 8.0,
        reviews: 578,
        isSelected: false,
    },
    {
        id: 4,
        name: '이니스프리 제주하우스',
        category: '카페/디저트, 체험/액티비티',
        rating: 6.0,
        reviews: 504,
        isSelected: false,
    },
    {
        id: 5,
        name: '카페 인',
        category: '카페/디저트',
        rating: 6.0,
        reviews: 438,
        isSelected: false,
    },
    {
        id: 6,
        name: '모래비 카페',
        category: '카페/디저트',
        rating: 5.0,
        reviews: 425,
        isSelected: false,
    },
    {
        id: 7,
        name: '고래가 될 카페',
        category: '카페/디저트',
        rating: 10.0,
        reviews: 336,
        isSelected: false,
    },
];

interface PlaceListItemProps {
    place: Place; // 장소 데이터를 받아옴
    onSelect: () => void; // 선택 로직을 처리하는 함수
}

const PlaceListItem: React.FC<PlaceListItemProps> = ({ place, onSelect }) => {
    return (
        <li
            className={`flex justify-between p-2 border-b cursor-pointer ${
                place.isSelected ? 'bg-blue-100' : ''
            }`}
        >
            <div>
                <p className='font-bold'>{place.name}</p>
                <p className='text-sm text-gray-600'>{place.category}</p>
                <div className='text-gray-500 flex items-center space-x-2'>
                    <span>{place.reviews.toLocaleString()} 리뷰</span>{' '}
                    {/* 저장 횟수 표시 */}
                    <span>{place.rating} 점</span> {/* 평점 표시 */}
                </div>
            </div>
            {/* SelectPlace 컴포넌트를 사용하여 아이콘 처리 */}
            <SelectPlace isSelected={place.isSelected} onSelect={onSelect} />
        </li>
    );
};

export default PlaceListItem;
