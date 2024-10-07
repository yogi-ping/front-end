import React, { useState } from 'react';
import {Search} from '../sidemenu/Search';
import {Friend, FriendListItem, friendData} from '../sidemenu/FriendListItem';
import { LuLink } from "react-icons/lu";
// import axios from 'axios';

type propTypes = {
  open: boolean;
  onClose: () => void;
}

export const Modal:React.FC<propTypes> = ({open, onClose}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [friendList, setFriendsList] = useState<Friend[]>(friendData);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/friends')
  //   .then((response) => setFriendsList(response.data))
  //   .catch(function(err){console.log(err)});
  // }, []);

  return (
  <div className={`fixed z-20 inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`} >
    <div className={`flex flex-col w-3/5 bg-white relative rounded-lg p-[40px] transition-all max-w-md ${open ? "flex" : "hidden"}`}>
      <button className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400 bg-white hover:bg-gary-50 hover:text-gray-600" onClick={onClose}>X</button>
      <p className='w-full text-2xl font-semibold mb-[30px] text-center'>친구와 함께 공유하세요</p>
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <ul className='flex content-start space-x-4 mt-[20px]'>
        {
          friendList.map((friend) => <FriendListItem key={friend.id} friend={friend}/>)
        }
      </ul>
      <div className='flex flex-col justify-center items-center mt-[10px]'>
        <div className='size-[3rem] rounded-full bg-black text-white flex justify-center items-center mt-4'>
          <LuLink size={20}/>
        </div>
        <span className='mt-2 text-xs'>링크공유</span>
      </div>
    </div>
  </div>
  );
};
