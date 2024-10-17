// SelectedPlacesDisplay.tsx
import React, { useContext } from 'react';
import { SelectedPlacesContext } from './SelectedPlacesContext';

const SelectedPlacesDisplay: React.FC = () => {
    const { selectedPlaces } = useContext(SelectedPlacesContext);

    return (
        <div>
            {selectedPlaces.map((place) => (
                <div key={place.id}>{place.name}</div>
            ))}
        </div>
    );
};

export default SelectedPlacesDisplay;
