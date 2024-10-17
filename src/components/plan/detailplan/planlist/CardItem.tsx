import React from 'react';
import { Place } from '../../selectplace/PlaceListItem'; // Place 타입 임포트

interface CardItemProps {
    place: Place;
}

const CardItem: React.FC<CardItemProps> = ({ place }) => {
    return (
        <div className='flex flex-col items-start'>
            <h3 className='font-semibold text-[15px] mb-[5px]'>{place.name}</h3>
            <p className='font-semibold text-gray-400 text-[13px]'>
                {place.category}
            </p>
        </div>
    );
};

export default CardItem;
