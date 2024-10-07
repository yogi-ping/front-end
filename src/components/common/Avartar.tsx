import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa6";

type AvartarProps = {
  username?: string;
}

export const Avartar:React.FC<AvartarProps> = ({ username }) => {
  const [name, setName] = useState(username);
  return(
    <div className='w-full max-w-24 flex flex-col items-center cursor-pointe mt-3'>
      <div className='size-[4.3rem] rounded-full bg-slate-200 flex justify-center items-center'>
      <FaRegUser size={31}/>
      </div>
      <span className='mt-2 text-sm'>{name}</span>
    </div>
  );

}