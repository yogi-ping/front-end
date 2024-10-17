/// <reference types="google.maps" />
import React, { useState, useEffect } from 'react';
import PlaceListItem, { Place } from './PlaceListItem';
import SearchBar from './SearchBar';
import MapComponent from '../../common/MapComponent'; // 경로를 명확하게 설정

export const PlaceList: React.FC = () => {
    const [places, setPlaces] = useState<Place[]>([]); // 장소 데이터를 저장하는 상태
    const [searchTerm, setSearchTerm] = useState(''); // 검색어 관리
    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null); // 선택된 장소
    const [apiLoaded, setApiLoaded] = useState(false); // API 로드 상태

    // Google Maps API 로드 여부 확인
    useEffect(() => {
        const checkGoogleMapsApi = () => {
            if (
                typeof window.google === 'undefined' ||
                typeof window.google.maps === 'undefined'
            ) {
                console.error('Google Maps API is not loaded');
                return false;
            }
            return true;
        };

        setApiLoaded(checkGoogleMapsApi());
    }, []);

    useEffect(() => {
        if (!apiLoaded) return;

        // Google Maps API를 통해 장소 데이터를 받아오는 함수
        const fetchPlacesData = () => {
            const service = new window.google.maps.places.PlacesService(
                document.createElement('div')
            );
            const request = {
                location: { lat: 33.4996, lng: 126.5312 }, // 제주도의 좌표
                radius: 5000, // 검색 반경 (단위: 미터)
                type: 'tourist_attraction', // 명소 타입
            };

            service.nearbySearch(
                request,
                (
                    results: google.maps.places.PlaceResult[], // Google Places API에서 반환된 결과 타입
                    status: google.maps.places.PlacesServiceStatus // Google Places API에서 반환된 상태
                ) => {
                    if (
                        status ===
                        window.google.maps.places.PlacesServiceStatus.OK
                    ) {
                        const formattedPlaces: Place[] = results.map(
                            (place, index) => ({
                                id: index + 1,
                                name: place.name || 'Unknown Place', // 이름이 없을 때 기본 값 설정
                                category: place.types?.join(', ') || '명소',
                                rating: place.rating || 0,
                                reviews: place.user_ratings_total || 0,
                                isSelected: false,
                                // location 값을 geometry로부터 추출
                                location: {
                                    lat: place.geometry?.location?.lat() || 0,
                                    lng: place.geometry?.location?.lng() || 0,
                                },
                            })
                        );
                        setPlaces(formattedPlaces); // 받아온 데이터를 상태에 저장
                    } else {
                        console.error('Places service failed:', status);
                    }
                }
            );
        };

        fetchPlacesData(); // 컴포넌트가 마운트될 때 데이터 가져오기
    }, [apiLoaded]); // API 로드가 완료된 후에만 데이터를 가져옴

    const handleSelectPlace = (id: number) => {
        const selected = places.find((place) => place.id === id);
        if (selected) {
            setSelectedPlace(selected); // 선택된 장소를 상태에 저장
        }
        setPlaces((prevPlaces) =>
            prevPlaces.map((place) =>
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
                        onSelect={() => handleSelectPlace(place.id)}
                    />
                ))}
            </ul>

            {/* 선택된 장소가 있을 경우 지도 표시 */}
            {selectedPlace && (
                <div className='mt-[20px]'>
                    <h3>선택된 장소: {selectedPlace.name}</h3>
                    <MapComponent
                        center={{
                            lat: selectedPlace.location.lat,
                            lng: selectedPlace.location.lng,
                        }}
                        radius={1000}
                        placeType='tourist_attraction'
                    />
                </div>
            )}
        </div>
    );
};

export default PlaceList;
