import React, { useState } from 'react';
import Calendar from '../../../../assets/Calendar.svg';
import TravelDestionationName from './TravelDestionaionName';
import SelectLocationButton from './SelectLocationButton';
import TravelTerm from './TravelTerm';

export const Header: React.FC = () => {
  const [travelDestination, setTravelDestination] = useState<string>('제주');
  const [travelTerm, setTravelTerm] = useState<string>(
    '2024.09.04(수) ~ 2024.09.06(금)'
  );
  const [isAddingLocation, setIsAddingLocation] = useState<boolean>(false);
  return (
    <>
      <div className="flex justify-between mb-[15px]">
        <TravelDestionationName travelDestination={travelDestination} />
        <div className="flex justify-center items-center">
          <p className="text-[20px] font-semibold mr-[5px]">장소추가</p>
          <SelectLocationButton
            isAddingLocation={isAddingLocation}
            setIsAddingLocation={setIsAddingLocation}
          />
        </div>
      </div>

      <TravelTerm travelTerm={travelTerm} />
    </>
  );
};