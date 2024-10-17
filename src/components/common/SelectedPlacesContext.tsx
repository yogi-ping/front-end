// 수정된 SelectedPlacesContext.tsx

import React, { createContext, useState, ReactNode } from 'react';
import { Place } from '../../components/plan/selectplace/PlaceListItem'; // 실제 경로에 따라 수정

interface SelectedPlacesContextProps {
    selectedPlaces: Place[];
    setSelectedPlaces: React.Dispatch<React.SetStateAction<Place[]>>;
}

export const SelectedPlacesContext = createContext<SelectedPlacesContextProps>({
    selectedPlaces: [],
    setSelectedPlaces: () => {},
});

interface SelectedPlacesProviderProps {
    children: ReactNode;
}

export const SelectedPlacesProvider: React.FC<SelectedPlacesProviderProps> = ({
    children,
}) => {
    const [selectedPlaces, setSelectedPlaces] = useState<Place[]>([]);

    return (
        <SelectedPlacesContext.Provider
            value={{ selectedPlaces, setSelectedPlaces }}
        >
            {children}
        </SelectedPlacesContext.Provider>
    );
};
