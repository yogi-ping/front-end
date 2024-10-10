import React from 'react';
interface TravelDestionationNameProps {
  travelDestination: string;
}
const TravelDestionationName: React.FC<TravelDestionationNameProps> = ({
  travelDestination,
}) => {
  return <h1 className="text-3xl font-bold">{travelDestination}</h1>;
};

export default TravelDestionationName;
