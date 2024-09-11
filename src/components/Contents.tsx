import searchIcon from '../assets/search.svg';
import locationIcon from '../assets/location.svg';

export const Contents = (): JSX.Element => {
  return (
    <div className='flex flex-col w-full max-w-screen-xl mx-auto h-auto items-center justify-center gap-[70px] relative'>
      <div className='flex flex-col items-center gap-[100px] w-full relative self-stretch w-full flex-[0_0_auto]'>
        <div className='inline-flex flex-col items-start gap-20 relative flex-[0_0_auto]'>
          <div className='text-center mt-60'>
            <h1 className="text-4xl md:text-6xl font-bold [font-family:'Pretendard-Bold',Helvetica] tracking-[-0.8px] leading-[96px]">
              실시간 공유 여행 플래너
            </h1>
            <p className="mt-4 text-lg md:text-xl [font-family:'Pretendard-Regular',Helvetica] text-gray-600 tracking-[-0.2px]">
              친구와 함께 여행 계획을 실시간으로 공유해보세요.
            </p>
          </div>
        </div>
        <div className='relative w-[700px] h-[53px] bg-surfaceinput rounded-[500px] overflow-hidden border-[0.5px] border-solid border-[#777777]'>
          <img
            className='absolute w-5 h-5 top-4 left-[18px]'
            alt='Search'
            src={searchIcon} // 수정된 부분
          />
          <div className="absolute w-[172px] h-[19px] top-[18px] left-16 [font-family:'Pretendard-Light',Helvetica] font-light text-[#777777] text-base text-center tracking-[-0.16px] leading-[19.2px] whitespace-nowrap">
            어디로 여행을 떠나시나요?
          </div>
        </div>
        <div className='relative w-[700px] h-[300px]'>
          <div className='absolute w-[700px] h-[100px] top-0 left-0 bg-[#f4f4f4] rounded-[30px_30px_0px_0px] overflow-hidden'>
            <img
              className='absolute w-9 h-9 top-9 left-[31px]'
              alt='Location'
              src={locationIcon} // 수정된 부분
            />
            <div className="absolute w-[38px] h-[23px] top-[30px] left-[83px] [font-family:'Pretendard-Bold',Helvetica] font-bold text-black text-xl text-center tracking-[-0.20px] leading-[24.0px] whitespace-nowrap">
              제주
            </div>
            <div className="absolute w-[57px] h-[21px] top-14 left-[83px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#8a8a8a] text-[15px] text-center tracking-[-0.15px] leading-[18.0px] whitespace-nowrap">
              대한민국
            </div>
          </div>
          <div className='absolute w-[700px] h-[100px] top-[100px] left-0 bg-[#f4f4f4]'>
            <img
              className='absolute w-9 h-9 top-[30px] left-[31px]'
              alt='Location'
              src={locationIcon} // 수정된 부분
            />
            <div className="absolute w-[38px] h-[23px] top-[26px] left-[83px] [font-family:'Pretendard-Bold',Helvetica] font-bold text-black text-xl text-center tracking-[-0.20px] leading-[24.0px] whitespace-nowrap">
              부산
            </div>
            <div className="absolute w-[57px] h-[21px] top-[52px] left-[83px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#8a8a8a] text-[15px] text-center tracking-[-0.15px] leading-[18.0px] whitespace-nowrap">
              대한민국
            </div>
          </div>
          <div className='absolute w-[700px] h-[100px] top-[200px] left-0 bg-[#f4f4f4] rounded-[0px_0px_30px_30px] overflow-hidden'>
            <img
              className='absolute w-9 h-9 top-[30px] left-[31px]'
              alt='Location'
              src={locationIcon} // 수정된 부분
            />
            <div className="absolute w-[38px] h-[23px] top-[26px] left-[83px] [font-family:'Pretendard-Bold',Helvetica] font-bold text-black text-xl text-center tracking-[-0.20px] leading-[24.0px] whitespace-nowrap">
              여수
            </div>
            <div className="absolute w-[57px] h-[21px] top-[52px] left-[83px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#8a8a8a] text-[15px] text-center tracking-[-0.15px] leading-[18.0px] whitespace-nowrap">
              대한민국
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
