import React, { useState } from 'react'
// import axios from 'axios';
import {friendData} from '../sidemenu/FriendListItem';

import { Modal } from '../../plan/sidemenu/Modal';
import { FaUserPlus } from "react-icons/fa6";
import { FriendListItem } from './FriendListItem';

export const Friends: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [friendList, setFriendsList] = useState<Friend[]>(friendData);
  
  /*
  useEffect(() => {
    axios.get('http://localhost:3000/friends')
    .then((response) => setFriendsList(response.data))
    .catch(function(err){console.log(err)});
  }, []);
  */

  return (
    <div className='w-full flex flex-col items-center mt-20'>
      <div className='w-2/3 h-10 flex justify-center items-center bg-sky-700 rounded-lg mb-5'>
        <span className='text-white text-s'>친구</span>
      </div>
      <div className='mb-8 cursor-pointer' onClick={()=> setOpen(true)}>
        <FaUserPlus size={41} />
      </div>
      <Modal open={open} onClose={()=>setOpen(false)} />
      <ul>
        {
          friendList.map((friend) => <FriendListItem key={friend.id} friend={friend}/>)
        }
      </ul>
    </div>
  );
};