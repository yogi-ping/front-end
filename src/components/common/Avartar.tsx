import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa6";

export const Avartar:React.FC = () => {
  const [name, setName] = useState('이찬');
  return(
    <div className='w-full max-w-24 flex flex-col items-center cursor-pointer'>
      <div className='size-[4.3rem] rounded-full bg-slate-200 flex justify-center items-center'>
      <FaRegUser size={31}/>
      </div>
      <span className='mt-2 text-sm'>{name}</span>
    </div>
  );

}