/// <reference types="google.maps" />
import React, { useState, useEffect, useContext, useRef } from 'react';
import PlaceListItem, { Place } from './PlaceListItem';
import SearchBar from './SearchBar';
import { SelectedPlacesContext } from '../../common/SelectedPlacesContext'; // 실제 경로로 수정

export const PlaceList: React.FC = () => {
    const [places, setPlaces] = useState<Place[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [apiLoaded, setApiLoaded] = useState(false);
    const [loading, setLoading] = useState(false); // 데이터 로딩 상태 관리
    const listRef = useRef<HTMLUListElement | null>(null); // 리스트 스크롤 감지용 ref
    const paginationRef =
        useRef<google.maps.places.PlaceSearchPagination | null>(null); // pagination 참조

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

    // Google Places API를 통해 장소 데이터를 받아오는 함수
    const fetchPlacesData = () => {
        if (!apiLoaded || loading) return;

        setLoading(true);
        const service = new window.google.maps.places.PlacesService(
            document.createElement('div')
        );
        const request: google.maps.places.PlaceSearchRequest = {
            location: { lat: 33.4996, lng: 126.5312 },
            radius: 20000, // 반경을 10km로 증가
            type: 'tourist_attraction', // 단일 문자열로 수정
        };

        service.nearbySearch(
            request,
            (
                results: google.maps.places.PlaceResult[],
                status: google.maps.places.PlacesServiceStatus,
                pagination: google.maps.places.PlaceSearchPagination
            ) => {
                if (
                    status === window.google.maps.places.PlacesServiceStatus.OK
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

                    // 리뷰 수 기준으로 내림차순 정렬
                    const sortedPlaces = formattedPlaces.sort(
                        (a, b) => b.reviews - a.reviews
                    );

                    setPlaces((prevPlaces) => [...prevPlaces, ...sortedPlaces]);

                    // pagination 객체 저장
                    paginationRef.current = pagination;

                    // 첫 페이지 로드 후 자동으로 다음 페이지 요청
                    if (pagination.hasNextPage) {
                        setTimeout(() => pagination.nextPage(), 2000); // 2초 후에 다음 페이지 요청
                    }
                } else {
                    console.error('Places service failed:', status);
                }
                setLoading(false);
            }
        );
    };

    useEffect(() => {
        fetchPlacesData(); // 컴포넌트 로드 시 데이터 첫 로드
    }, [apiLoaded]);

    // 무한 스크롤 감지
    const handleScroll = () => {
        if (!listRef.current || loading || !paginationRef.current?.hasNextPage)
            return;

        const { scrollTop, scrollHeight, clientHeight } = listRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 50) {
            // 스크롤이 바닥에 가까워지면 다음 페이지 요청
            paginationRef.current.nextPage(); // 다음 페이지 데이터 요청
        }
    };

    // 선택된 장소 관리
    const handleSelectPlace = (id: number) => {
        const selectedPlace = places.find((place) => place.id === id);
        if (!selectedPlace) return;

        const isSelected = !selectedPlace.isSelected;

        const updatedPlaces = places.map((place) =>
            place.id === id ? { ...place, isSelected } : place
        );
        setPlaces(updatedPlaces);

        if (isSelected) {
            setSelectedPlaces((prevSelected) => {
                if (!prevSelected.some((place) => place.id === id)) {
                    return [...prevSelected, { ...selectedPlace, isSelected }];
                }
                return prevSelected;
            });
        } else {
            setSelectedPlaces((prevSelected) =>
                prevSelected.filter((place) => place.id !== id)
            );
        }
    };

    const filteredPlaces = places.filter((place) =>
        place.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='w-[600px] flex flex-col px-[20px]'>
            <div className='flex py-[20px] items-center'>
                <p className='text-[20px] font-semibold mr-[5px]'>장소 선택</p>
            </div>

            <div className='py-[5px]'>
                <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
            </div>

            {/* 스크롤 가능한 리스트 영역 */}
            <ul
                className='space-y-2 overflow-y-auto max-h-[calc(100vh-200px)]'
                onScroll={handleScroll} // 스크롤 이벤트 처리
                ref={listRef} // 리스트 참조
            >
                {filteredPlaces.map((place) => (
                    <PlaceListItem
                        key={place.id}
                        place={place}
                        onSelect={() => handleSelectPlace(place.id)}
                    />
                ))}
            </ul>

            {/* 로딩 중일 때 로딩 표시 */}
            {loading && <div>Loading...</div>}
        </div>
    );
};

export default PlaceList;
