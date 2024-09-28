import { useState } from 'react';

type Place = {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  isSelected: boolean;
};

const placesData: Place[] = [
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

export const PlaceList: React.FC = () => {
  const [places, setPlaces] = useState(placesData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectPlace = (id: number) => {
    setPlaces((prev) =>
      prev.map((place) =>
        place.id === id ? { ...place, isSelected: !place.isSelected } : place
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
      <div className='mb-4'>
        <input
          type='text'
          placeholder='검색'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-full p-2 border rounded'
        />
      </div>

      {/* 장소 리스트 */}
      <ul className='space-y-2 overflow-y-auto'>
        {filteredPlaces.map((place) => (
          <li
            key={place.id}
            className={`flex justify-between p-2 border-b cursor-pointer ${
              place.isSelected ? 'bg-blue-100' : ''
            }`}
            onClick={() => handleSelectPlace(place.id)}
          >
            <div>
              <p className='font-bold'>{place.name}</p>
              <p className='text-sm text-gray-600'>{place.category}</p>
            </div>
            <div className='text-right'>
              <p className='text-gray-700'>{place.reviews} 리뷰</p>
              <p className='font-bold'>{place.rating} 점</p>
              <div
                className={`mt-2 ${
                  place.isSelected ? 'text-blue-500' : 'text-gray-400'
                }`}
              >
                {place.isSelected ? '선택됨' : '선택'}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaceList;
