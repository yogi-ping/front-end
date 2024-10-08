import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Header = (): JSX.Element => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true); // 토큰이 존재하면 로그인 상태
        }
    }, []);

    const handleLogout = async () => {
        try {
            // 로그아웃 요청을 백엔드에 보냄
            await axios.post(
                'http://localhost:7777/auth/logout',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'token'
                        )}`,
                    },
                }
            );

            localStorage.removeItem('token'); // 로컬 스토리지에서 토큰 삭제
            setIsLoggedIn(false); // 로그인 상태 변경
            console.log('사용자 로그아웃 성공'); // 로그 추가
            navigate('/login'); // 로그인 페이지로 이동
        } catch (error) {
            console.error('로그아웃 중 오류 발생:', error);
            alert('로그아웃 중 문제가 발생했습니다.');
        }
    };

    return (
        <header className='flex w-full max-w-screen-xl mx-auto h-20 items-center relative bg-white'>
            <Logo />
            <nav className='ml-auto flex items-center gap-4 mt-8 md:gap-6 lg:gap-[30px] pr-4 md:pr-10 lg:pr-0'>
                <MenuItem label='여행지' />
                <MenuItem label='고객지원' />
                <MenuItem label='이용방법' />
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

// 로고 컴포넌트
const Logo = (): JSX.Element => (
    <div className='absolute w-20 top-5 left-1/2 transform -translate-x-1/2 font-bold text-transparent text-2xl text-center tracking-tight leading-7'>
        <span className='text-[#2b79c2] tracking-tight leading-10'>
            Y O G I<br />
        </span>
        <span className='text-black tracking-tight'>P I N G</span>
    </div>
);

// 메뉴 항목 컴포넌트
const MenuItem = ({ label }: { label: string }): JSX.Element => (
    <div className='text-sm font-medium text-texticonhighemp whitespace-nowrap'>
        {label}
    </div>
);

export default Header;
