import React from 'react';
import { Avartar } from '../../common/Avartar';

export type Friend = {
  id: number;
  name: string;
  email: string;
}

export const friendData:Friend[] = [
  {
    id: 1,
    name: '릴리',
    email: 'rilly@email.com'
  },
  {
    id: 2,
    name: '둘리',
    email: 'dully@email.com'
  }
];


type FriendListItemProps = {
  friend: Friend
}

export const FriendListItem:React.FC<FriendListItemProps> = ({friend}) => {
  const { name } = friend;

  return(<li><Avartar username={name}/></li>)
}