import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../common/InputField';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                'http://localhost:7777/auth/login',
                {
                    email,
                    password,
                }
            );

            if (response.status === 200) {
                // 백엔드에서 받은 토큰을 로컬 스토리지에 저장
                const token = response.data.token;
                localStorage.setItem('token', token);

                // 로그인 성공 시 메인 페이지로 이동
                navigate('/');
            } else {
                alert('로그인 실패: 잘못된 이메일 또는 비밀번호');
            }
        } catch (error) {
            console.error('로그인 요청 중 오류 발생:', error);
            alert('로그인 중 문제가 발생했습니다.');
        }
    };

    const handleJoinClick = () => {
        navigate('/join'); // '/join' 경로로 이동
    };

    return (
        <div className='flex-1 flex justify-center'>
            <div className='w-full max-w-md'>
                <div className='bg-white rounded-lg border border-gray-300 p-8'>
                    <h2 className='text-xl font-semibold mb-6 '>로그인</h2>

                    <InputField
                        id='email'
                        type='email'
                        label='이메일'
                        placeholder='이메일을 입력하세요'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <InputField
                        id='password'
                        type='password'
                        label='비밀번호'
                        placeholder='비밀번호를 입력하세요'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        onClick={handleLogin}
                        className='w-full bg-[#2b79c2] text-white text-lg py-3 rounded-md hover:bg-blue-700 transition-colors'
                    >
                        로그인
                    </button>

                    {/* 회원가입 섹션 */}
                    <div className='mt-6 text-center text-sm'>
                        <span className='text-gray-500'>
                            아직 회원이 아니세요?
                        </span>{' '}
                        <span
                            className='text-blue-600 cursor-pointer'
                            onClick={handleJoinClick} // 클릭 시 handleJoinClick 함수 호출
                        >
                            이메일 회원가입
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
