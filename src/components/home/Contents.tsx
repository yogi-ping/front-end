import { useState } from 'react';
import Title from './Title'; // 헤더 컴포넌트
import SearchBar from './SearchBar'; // 검색바 컴포넌트
import TravelDestinationBox from './TravelDestinationBox'; // 위치 리스트 관리

export const Contents = (): JSX.Element => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='flex flex-col w-full max-w-screen-xl mx-auto h-auto items-center justify-center gap-12 relative mt-16 transform scale-110'>
            {/* 컨텐츠 상단에 여백 추가 */}
            <div className='flex flex-col items-center gap-12 w-full'>
                <Title />
                {/* 여기서 SearchBar 크기 조정 가능 */}
                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                <TravelDestinationBox />
            </div>
        </div>
    );
};

export default Contents;
