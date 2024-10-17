// PlaceListItem.tsx
import React from 'react';
import SelectPlace from './SelectPlace'; // SelectPlace 컴포넌트 임포트

export type Place = {
    id: number;
    name: string;
    category: string;
    rating: number;
    reviews: number;
    isSelected: boolean;
    location: { lat: number; lng: number }; // location 속성 추가
};

interface PlaceListItemProps {
    place: Place; // 장소 데이터를 받아옴
    onSelect: () => void; // 선택 로직을 처리하는 함수
}

const PlaceListItem: React.FC<PlaceListItemProps> = ({ place, onSelect }) => {
    return (
        <li
            className={`flex justify-between items-center p-4 border-b cursor-pointer ${
                place.isSelected ? 'bg-blue-100' : 'bg-white'
            }`}
        >
            <div
                className='flex flex-col'
                onClick={onSelect} // 리스트 아이템 내용 클릭 시 선택되도록 수정
            >
                <p className='font-semibold text-lg'>{place.name}</p>
                <p className='text-sm text-gray-600'>{place.category}</p>
                <div className='text-gray-500 flex items-center space-x-2'>
                    <span className='flex items-center'>
                        {/* 리뷰 수 아이콘 및 텍스트 */}
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                        >
                            <path d='M9.049 2.927C9.469 1.1 10.531 1.1 10.951 2.927l.468 1.884a1.6 1.6 0 001.283 1.17l1.884.468c1.826.47 1.826 1.532 0 1.951l-1.884.468a1.6 1.6 0 00-1.17 1.283l-.468 1.884c-.47 1.826-1.532 1.826-1.951 0l-.468-1.884a1.6 1.6 0 00-1.283-1.17l-1.884-.468c-1.826-.47-1.826-1.532 0-1.951l1.884-.468a1.6 1.6 0 001.17-1.283l.468-1.884z' />
                        </svg>
                        {place.reviews.toLocaleString()}
                    </span>
                    <span className='flex items-center'>
                        {/* 평점 아이콘 및 텍스트 */}
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                        >
                            <path d='M9.049 2.927C9.469 1.1 10.531 1.1 10.951 2.927l.468 1.884a1.6 1.6 0 001.283 1.17l1.884.468c1.826.47 1.826 1.532 0 1.951l-1.884.468a1.6 1.6 0 00-1.17 1.283l-.468 1.884c-.47 1.826-1.532 1.826-1.951 0l-.468-1.884a1.6 1.6 0 00-1.283-1.17l-1.884-.468c-1.826-.47-1.826-1.532 0-1.951l1.884-.468a1.6 1.6 0 001.17-1.283l.468-1.884z' />
                        </svg>
                        {place.rating.toFixed(1)}
                    </span>
                </div>
            </div>

            {/* 선택 버튼 */}
            <SelectPlace
                isSelected={place.isSelected}
                onSelect={(event) => {
                    event.stopPropagation(); // 이벤트 버블링 방지
                    onSelect();
                }}
            />
        </li>
    );
};

export default PlaceListItem;
