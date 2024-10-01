import React from 'react'

import { Avartar } from '../../common/Avartar';
import { FaUserPlus } from "react-icons/fa6";

export const Friends: React.FC = () => {
  return (
    <div className='w-full flex flex-col items-center mt-20'>
      <div className='w-2/3 h-10 flex justify-center items-center bg-sky-700 rounded-lg mb-5'>
        <span className='text-white text-s'>친구</span>
      </div>
      <div className='mb-8 cursor-pointer'>
        <FaUserPlus size={41} />
      </div>
      <Avartar />
    </div>
  );
};