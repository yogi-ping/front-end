// pages/Login.tsx
import React from 'react';
import Title from '../components/login/Title'; // Title 컴포넌트 불러오기
import LoginForm from '../components/login/LoginForm'; // LoginForm 컴포넌트 불러오기

const Login: React.FC = () => {
  return (
    <div className='bg-white flex justify-center items-center w-full min-h-screen'>
      <div className='flex flex-col md:flex-row w-full max-w-7xl bg-white p-4 md:p-12'>
        {/* 타이틀 섹션 */}
        <Title />

        {/* 로그인 폼 */}
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
