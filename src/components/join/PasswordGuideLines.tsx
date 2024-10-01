import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid'; // 최신 버전 경로

const PasswordGuidelines = () => {
    const [guidelines, setGuidelines] = useState({
        length: true, // 8자 이상, 15자 이하
        specialChar: false, // 특수 문자 사용
        repeatedChar: false, // 동일한 문자가 4번 반복되지 않음
    });

    return (
        <div className='flex flex-col space-y-2'>
            {/* 첫 번째 조건: 8자 이상, 15자 이하 */}
            <div className='flex items-center'>
                {guidelines.length ? (
                    <CheckCircleIcon className='h-5 w-5 text-blue-500' />
                ) : (
                    <span className='h-5 w-5 border rounded-full border-gray-300'></span>
                )}
                <span
                    className={`ml-2 text-sm ${
                        guidelines.length ? 'text-teal-600' : 'text-gray-500'
                    }`}
                >
                    8자 이상, 15자 이하로 설정해 주세요
                </span>
            </div>

            {/* 두 번째 조건: 특수 문자 사용 */}
            <div className='flex items-center'>
                {guidelines.specialChar ? (
                    <CheckCircleIcon className='h-5 w-5 text-blue-500' />
                ) : (
                    <span className='h-5 w-5 border rounded-full border-gray-300'></span>
                )}
                <span
                    className={`ml-2 text-sm ${
                        guidelines.specialChar
                            ? 'text-teal-600'
                            : 'text-gray-500'
                    }`}
                >
                    특수 문자를 사용해 주세요
                </span>
            </div>

            {/* 세 번째 조건: 동일한 문자가 4번 반복되지 않음 */}
            <div className='flex items-center'>
                {guidelines.repeatedChar ? (
                    <CheckCircleIcon className='h-5 w-5 text-blue-500' />
                ) : (
                    <span className='h-5 w-5 border rounded-full border-gray-300'></span>
                )}
                <span
                    className={`ml-2 text-sm ${
                        guidelines.repeatedChar
                            ? 'text-teal-600'
                            : 'text-gray-500'
                    }`}
                >
                    동일한 문자가 4번 반복되면 안돼요
                </span>
            </div>
        </div>
    );
};

export default PasswordGuidelines;
