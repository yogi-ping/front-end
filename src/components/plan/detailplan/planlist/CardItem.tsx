import React from 'react';

const CardItem: React.FC = () => {
  return (
    <div className="flex flex-col items-start">
      <h3 className="font-semibold text-[15px] mb-[5px]">
        리치 망고(망고레이)
      </h3>
      <p className="font-semibold text-gray-400 text-[13px]">카페/디저트</p>
    </div>
  );
};

export default CardItem;
