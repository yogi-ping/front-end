import { Link } from 'react-router-dom';

export const Header = (): JSX.Element => {
  return (
    <div className='flex w-full max-w-screen-xl mx-auto h-20 items-center relative bg-white'>
      {/* 로고 */}
      <div className="absolute w-20 top-[20px] left-1/2 transform -translate-x-1/2 [font-family:'Pretendard-Medium',Helvetica] font-bold text-transparent text-2xl text-center tracking-[-0.24px] leading-[28.8px]">
        <span className='text-[#2b79c2] tracking-[-0.06px] leading-[40px]'>
          Y O G I<br />
        </span>
        <span className='text-black tracking-[-0.06px]'>P I N G</span>
      </div>

      {/* 메뉴 */}
      <div
        className="ml-auto flex items-center gap-4 mt-8 md:gap-6 lg:gap-[30px] pr-4 md:pr-10 lg:pr-[0px]
      [font-family:'Pretendard-Medium',Helvetica] font-"
      >
        <div className='text-sm font-medium text-texticonhighemp whitespace-nowrap'>
          여행지
        </div>
        <div className='text-sm font-medium text-texticonhighemp whitespace-nowrap'>
          고객지원
        </div>
        <div className='text-sm font-medium text-texticonhighemp whitespace-nowrap'>
          이용방법
        </div>
        <Link to='/login'>
          <div className='text-sm font-medium text-texticonhighemp whitespace-nowrap'>
            로그인
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
