/// <reference types="google.maps" />
import React, { useEffect } from 'react';

interface MapComponentProps {
    center: { lat: number; lng: number }; // 지도 중심 좌표
    radius?: number; // 반경 (기본값 5000)
    placeType?: string; // 장소 타입 (단일 문자열)
}

const MapComponent: React.FC<MapComponentProps> = ({
    center,
    radius = 5000,
    placeType = 'tourist_attraction',
}) => {
    useEffect(() => {
        const loadGoogleMapsApi = () => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${
                import.meta.env.VITE_GOOGLE_MAPS_API_KEY
            }&libraries=places`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
            script.onload = () => {
                initMap();
            };
        };

        if (!window.google) {
            loadGoogleMapsApi();
        } else {
            initMap();
        }
    }, []);

    const initMap = () => {
        const map = new window.google.maps.Map(
            document.getElementById('map') as HTMLElement,
            {
                center,
                zoom: 13,
            }
        );

        const service = new window.google.maps.places.PlacesService(map);

        // 'type' 속성에 배열 형태로 placeType 전달
        const request: google.maps.places.PlaceSearchRequest = {
            location: center,
            radius: radius,
            type: placeType, // 단일 문자열로 전달
        };

        // Nearby Search를 사용해 명소를 검색하고 마커를 추가
        service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                results?.forEach((place) => {
                    if (place.geometry?.location) {
                        new window.google.maps.Marker({
                            map,
                            position: place.geometry.location,
                            title: place.name,
                        });
                    }
                });
            } else {
                console.error('Places service failed:', status);
            }
        });
    };

    return <div id='map' style={{ width: '100%', height: '100%' }} />; // 전체 공간을 차지하도록 설정
};

export default MapComponent;
