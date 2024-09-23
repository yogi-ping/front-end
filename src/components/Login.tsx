import { useNavigate } from 'react-router-dom';

export const Login = (): JSX.Element => {
  const navigate = useNavigate();

  // 홈으로 이동하는 함수
  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className='bg-white flex justify-center items-center w-full min-h-screen'>
      <div className='flex flex-col md:flex-row w-full max-w-7xl bg-white p-4 md:p-12'>
        {/* 설명과 YOGI PING 컴포넌트 */}
        <LoginDescription onGoHome={handleGoHome} />

        {/* 로그인 폼 컴포넌트 */}
        <LoginForm />
      </div>
    </div>
  );
};

// 설명과 YOGI PING 컴포넌트 분리
const LoginDescription = ({
  onGoHome,
}: {
  onGoHome: () => void;
}): JSX.Element => (
  <div className='flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left mb-8 md:mb-0'>
    <p className='text-xl font-medium mb-4'>
      요기핑의 다양한 서비스로
      <br /> 여행계획을 쉽게!
    </p>
    <button className='text-4xl font-bold text-[#2b79c2]' onClick={onGoHome}>
      Y O G I <br />
      <span className='text-black'>P I N G</span>
    </button>
  </div>
);

// 로그인 폼 컴포넌트 분리
const LoginForm = (): JSX.Element => (
  <div className='flex-1 flex justify-center'>
    <div className='w-full max-w-md'>
      <div className='bg-white rounded-lg border border-gray-300 p-8'>
        <h2 className='text-xl font-bold mb-6 text-center'>로그인</h2>

        <InputField
          id='email'
          type='email'
          label='이메일'
          placeholder='이메일을 입력하세요'
        />

        <InputField
          id='password'
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

// 공통 Input 필드 컴포넌트 분리
const InputField = ({
  id,
  type,
  label,
  placeholder,
}: {
  id: string;
  type: string;
  label: string;
  placeholder: string;
}): JSX.Element => (
  <div className='mb-4'>
    <label
      className='block text-gray-500 text-sm font-medium mb-2'
      htmlFor={id}
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
      placeholder={placeholder}
    />
  </div>
);

export default Login;
