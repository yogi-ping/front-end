import React, { useState } from 'react';
import InputField from '../common/InputField';
import PasswordGuideLines from './PasswordGuideLines';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const JoinForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [guidelines, setGuidelines] = useState({
        length: false,
        specialChar: false,
        repeatedChar: false,
    });
    const navigate = useNavigate(); // useNavigate 훅 추가

    // 이메일 유효성 검사
    const isValidEmail = (email: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // 비밀번호 변경 처리
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);

        // 비밀번호 가이드라인 검사
        const length = value.length >= 8 && value.length <= 15;
        const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
        const repeatedChar = !/(.)\1{3}/.test(value.replace(/\s/g, '')); // 공백 제거 후 동일 문자 4번 반복 검사

        setGuidelines({ length, specialChar, repeatedChar });
    };

    // 회원가입 처리
    const handleSignup = async () => {
        if (!isValidEmail(email)) {
            alert('유효한 이메일 주소를 입력하세요.');
            return;
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError('비밀번호가 일치하지 않습니다.');
            return;
        }

        setIsLoading(true); // 로딩 상태 활성화

        try {
            const response = await axios.post(
                'http://localhost:7777/auth/join',
                {
                    email,
                    password,
                }
            );

            if (response.status === 201) {
                alert('회원가입이 완료되었습니다! 로그인 해주세요.'); // 회원가입 완료 메시지
                navigate('/login'); // 바로 로그인 페이지로 이동
            } else {
                alert('회원가입 실패: 다시 시도해주세요');
            }
        } catch (error) {
            console.error('회원가입 요청 중 오류 발생:', error);
            alert('회원가입 중 문제가 발생했습니다.');
        } finally {
            setIsLoading(false); // 로딩 상태 비활성화
        }
    };

    // 폼 유효성 검사
    const isFormValid =
        guidelines.length && guidelines.specialChar && guidelines.repeatedChar;

    return (
        <div className='flex-1 flex justify-center'>
            <div className='w-full max-w-md'>
                <div className='bg-white rounded-lg border border-gray-300 p-8'>
                    <h2 className='text-xl font-semibold mb-6'>회원가입</h2>

                    {/* 이메일 입력 필드 */}
                    <InputField
                        id='email'
                        type='email'
                        label='이메일'
                        placeholder='이메일을 입력하세요'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setConfirmPasswordError(''); // 이메일 변경 시 오류 초기화
                        }}
                    />

                    {/* 비밀번호 입력 필드 */}
                    <InputField
                        id='password'
                        type='password'
                        label='비밀번호'
                        placeholder='비밀번호를 입력하세요'
                        value={password}
                        onChange={handlePasswordChange}
                    />

                    {/* 비밀번호 확인 입력 필드 */}
                    <InputField
                        id='password-confirm'
                        type='password'
                        label='비밀번호 확인'
                        placeholder='비밀번호를 다시 입력하세요'
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            setConfirmPasswordError(''); // 비밀번호 확인 변경 시 오류 초기화
                        }}
                    />
                    {confirmPasswordError && (
                        <p className='text-red-500 text-sm mt-2'>
                            {confirmPasswordError}
                        </p>
                    )}

                    {/* 비밀번호 가이드라인 */}
                    <div className='my-5'>
                        <PasswordGuideLines password={password} />
                    </div>

                    {/* 회원가입 버튼 */}
                    <button
                        onClick={handleSignup}
                        className={`w-full text-white text-lg py-3 rounded-md transition-colors ${
                            isFormValid
                                ? 'bg-blue-500 hover:bg-blue-700'
                                : 'bg-gray-400 cursor-not-allowed'
                        }`}
                        disabled={!isFormValid || isLoading}
                    >
                        {isLoading ? '처리 중...' : '회원가입'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JoinForm;
