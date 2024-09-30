// home/Title.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Title: React.FC = () => {
    const navigate = useNavigate();

    // 홈으로 이동하는 함수
    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className='flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left mb-8 md:mb-0'>
            <p className='text-xl font-medium mb-4'>
                요기핑의 다양한 서비스로
                <br /> 여행계획을 쉽게!
            </p>
            <button
                className='text-4xl font-bold text-[#2b79c2]'
                onClick={handleGoHome}
            >
                Y O G I <br />
                <span className='text-black'>P I N G</span>
            </button>
        </div>
    );
};

export default Title;
