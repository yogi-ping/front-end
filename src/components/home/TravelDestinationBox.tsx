import React from 'react';
import { useNavigate } from 'react-router-dom';
import locationIcon from '../../assets/location.svg';
import { locations } from './TravelDestinationItem';

const TravelDestinationBox: React.FC = () => {
  const navigate = useNavigate();

  const handleLocationSelect = (location: { name: string; country: string }) => {
    navigate('/plan', { state: { selectedCity: location.name } });
  };

  return (
    <div className='w-full max-w-md'>
      {locations.map((location, index) => (
        <LocationButton
          key={location.name}
          name={location.name}
          country={location.country}
          roundedTop={index === 0}
          roundedBottom={index === locations.length - 1}
          onClick={() => handleLocationSelect(location)}
        />
      ))}
    </div>
  );
};

const LocationButton = ({
  name,
  country,
  roundedTop,
  roundedBottom,
  onClick,
}: {
  name: string;
  country: string;
  roundedTop?: boolean;
  roundedBottom?: boolean;
  onClick: () => void;
}): JSX.Element => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 p-3 bg-gray-100 ${
      roundedTop ? 'rounded-t-2xl' : ''
    } ${
      roundedBottom ? 'rounded-b-2xl' : ''
    } overflow-hidden hover:bg-gray-200 focus:outline-none`}
  >
    <img className='w-8 h-8' alt='Location' src={locationIcon} />
    <div className='flex flex-col text-left'>
      <span className='font-bold text-base text-black'>{name}</span>
      <span className='text-xs text-gray-500'>{country}</span>
    </div>
  </button>
);

export default TravelDestinationBox;