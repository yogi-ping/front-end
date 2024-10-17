import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 import

export const Logo: React.FC = () => {
    const navigate = useNavigate(); // navigate 훅 생성

    const handleLogoClick = () => {
        navigate('/'); // 로고 클릭 시 홈으로 라우팅
    };

    return (
        <div onClick={handleLogoClick} className='cursor-pointer'>
            {' '}
            {/* 클릭 이벤트 추가 및 커서 포인터 스타일 추가 */}
            {/* 로고 */}
            <div className="w-20 [font-family:'Pretendard-Medium',Helvetica] font-bold text-transparent text-2xl text-center tracking-[-0.24px] leading-[28.8px]">
                <span className='text-[#2b79c2] tracking-[-0.06px] leading-[40px]'>
                    Y O G I<br />
                </span>
                <span className='text-black tracking-[-0.06px]'>P I N G</span>
            </div>
        </div>
    );
};

export default Logo;
