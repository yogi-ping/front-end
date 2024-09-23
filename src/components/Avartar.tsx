import React, { useState } from 'react';

export const Avartar:React.FC = () => {
  const [name, setName] = useState('이찬');
  return(
    <div className='w-full max-w-24 flex flex-col items-center cursor-pointer'>
      <div className='size-20 rounded-full bg-slate-200 flex justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      </div>
      <span>{name}</span>
    </div>
  );

}