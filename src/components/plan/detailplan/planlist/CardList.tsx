// CardList.tsx
import React, { useContext } from 'react';
import VerticalLine from './VerticalLine';
import Time from './Time';
import { SelectedPlacesContext } from '../../../common/SelectedPlacesContext'; // 컨텍스트 임포트

const CardList: React.FC = () => {
    const { selectedPlaces } = useContext(SelectedPlacesContext); // 컨텍스트에서 선택된 장소 가져오기

    console.log('Selected Places:', selectedPlaces); // 콘솔에 출력하여 확인

    return (
        <div className=''>
            <Time />
            {selectedPlaces.map((place) => (
                <div key={place.id} className='flex'>
                    <VerticalLine />
                    <div className='flex flex-col items-start'>
                        <h3 className='font-semibold text-[15px] mb-[5px]'>
                            {place.name}
                        </h3>
                        <p className='font-semibold text-gray-400 text-[13px]'>
                            {place.category}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardList;
