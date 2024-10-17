// index.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { SelectedPlacesProvider } from '../src/components/common/SelectedPlacesContext'; // 추가된 임포트
import React from 'react';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SelectedPlacesProvider>
            <App />
        </SelectedPlacesProvider>
    </StrictMode>
);
