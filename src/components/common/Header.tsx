import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = (): JSX.Element => {
    // 로그인 상태 관리 (예시로 기본값을 false로 설정)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 로그아웃 함수
    const handleLogout = () => {
        setIsLoggedIn(false); // 로그아웃 처리 (상태 변경)
        // 추가로 필요한 로그아웃 로직을 여기에 추가 가능 (예: 토큰 삭제 등)
    };

    return (
        <header className='flex w-full max-w-screen-xl mx-auto h-20 items-center relative bg-white'>
            {/* 로고 */}
            <Logo />

            {/* 메뉴 */}
            <nav className='ml-auto flex items-center gap-4 mt-8 md:gap-6 lg:gap-[30px] pr-4 md:pr-10 lg:pr-0'>
                <MenuItem label='여행지' />
                <MenuItem label='고객지원' />
                <MenuItem label='이용방법' />

                {/* 로그인 여부에 따른 조건부 렌더링 */}
                {isLoggedIn ? (
                    <button onClick={handleLogout}>
                        <MenuItem label='로그아웃' />
                    </button>
                ) : (
                    <Link to='/login'>
                        <MenuItem label='로그인' />
                    </Link>
                )}
            </nav>
        </header>
    );
};

// 로고 컴포넌트 분리
const Logo = (): JSX.Element => (
    <div className='absolute w-20 top-5 left-1/2 transform -translate-x-1/2 font-bold text-transparent text-2xl text-center tracking-tight leading-7'>
        <span className='text-[#2b79c2] tracking-tight leading-10'>
            Y O G I<br />
        </span>
        <span className='text-black tracking-tight'>P I N G</span>
    </div>
);

// 메뉴 항목 컴포넌트 분리
const MenuItem = ({ label }: { label: string }): JSX.Element => (
    <div className='text-sm font-medium text-texticonhighemp whitespace-nowrap'>
        {label}
    </div>
);

export default Header;
