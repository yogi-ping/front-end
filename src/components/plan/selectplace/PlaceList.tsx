/// <reference types="google.maps" />
import React, { useState, useEffect, useContext } from 'react';
import PlaceListItem, { Place } from './PlaceListItem';
import SearchBar from './SearchBar';
import { SelectedPlacesContext } from '../../common/SelectedPlacesContext'; // 경로를 실제 경로로 수정하세요

export const PlaceList: React.FC = () => {
    const [places, setPlaces] = useState<Place[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [apiLoaded, setApiLoaded] = useState(false);

    // 컨텍스트에서 selectedPlaces와 setSelectedPlaces 가져오기
    const { selectedPlaces, setSelectedPlaces } = useContext(
        SelectedPlacesContext
    );

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
                location: { lat: 33.4996, lng: 126.5312 },
                radius: 5000,
                type: 'tourist_attraction',
            };

            service.nearbySearch(
                request,
                (
                    results: google.maps.places.PlaceResult[],
                    status: google.maps.places.PlacesServiceStatus
                ) => {
                    if (
                        status ===
                        window.google.maps.places.PlacesServiceStatus.OK
                    ) {
                        const formattedPlaces: Place[] = results.map(
                            (place, index) => ({
                                id: index + 1,
                                name: place.name || 'Unknown Place',
                                category: place.types?.join(', ') || '명소',
                                rating: place.rating || 0,
                                reviews: place.user_ratings_total || 0,
                                isSelected: false,
                                location: {
                                    lat: place.geometry?.location?.lat() || 0,
                                    lng: place.geometry?.location?.lng() || 0,
                                },
                            })
                        );
                        setPlaces(formattedPlaces);
                    } else {
                        console.error('Places service failed:', status);
                    }
                }
            );
        };

        fetchPlacesData();
    }, [apiLoaded]);

    // 선택된 장소 관리
    const handleSelectPlace = (id: number) => {
        // 선택된 장소 찾기
        const selectedPlace = places.find((place) => place.id === id);
        if (!selectedPlace) return;

        // 선택 상태 토글
        const isSelected = !selectedPlace.isSelected;

        // `places` 상태 업데이트
        const updatedPlaces = places.map((place) =>
            place.id === id ? { ...place, isSelected } : place
        );
        setPlaces(updatedPlaces);

        // `selectedPlaces` 상태 업데이트
        if (isSelected) {
            // 선택된 경우 추가 (중복 방지)
            setSelectedPlaces((prevSelected) => {
                // 이미 존재하는지 확인
                if (!prevSelected.some((place) => place.id === id)) {
                    return [...prevSelected, { ...selectedPlace, isSelected }];
                }
                return prevSelected;
            });
        } else {
            // 선택 해제된 경우 제거
            setSelectedPlaces((prevSelected) =>
                prevSelected.filter((place) => place.id !== id)
            );
        }
    };

    const filteredPlaces = places.filter((place) =>
        place.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='w-[600px] flex flex-col px-[20px] '>
            <div className='flex py-[20px] items-center'>
                <p className='text-[20px] font-semibold mr-[5px]'>장소 선택</p>
            </div>

            <div className='py-[5px]'>
                <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
            </div>

            <ul className='space-y-2 overflow-y-auto'>
                {filteredPlaces.map((place) => (
                    <PlaceListItem
                        key={place.id}
                        place={place}
                        onSelect={() => handleSelectPlace(place.id)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default PlaceList;
