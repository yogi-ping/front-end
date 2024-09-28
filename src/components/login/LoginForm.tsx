// login/LoginForm.tsx
import React from 'react';
import InputField from './Input'; // InputField 컴포넌트 가져오기

const LoginForm = () => (
  <div className='flex-1 flex justify-center'>
    <div className='w-full max-w-md'>
      <div className='bg-white rounded-lg border border-gray-300 p-8'>
        <h2 className='text-xl font-bold mb-6 text-center'>로그인</h2>

        <InputField
          id='email' // id 전달
          type='email'
          label='이메일'
          placeholder='이메일을 입력하세요'
        />

        <InputField
          id='password' // id 전달
          type='password'
          label='비밀번호'
          placeholder='비밀번호를 입력하세요'
        />

        <div className='flex justify-between text-sm mb-6'>
          <span className='text-gray-500 cursor-pointer'>
            비밀번호를 잊으셨나요?
          </span>
        </div>

        <button className='w-full bg-[#2b79c2] text-white text-lg py-3 rounded-md hover:bg-blue-700 transition-colors'>
          로그인
        </button>

        <div className='mt-6 text-center text-sm'>
          <span className='text-gray-500'>아직 회원이 아니세요?</span>{' '}
          <span className='text-blue-600 cursor-pointer'>이메일 회원가입</span>
        </div>
      </div>
    </div>
  </div>
);

export default LoginForm;
