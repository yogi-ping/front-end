import React from 'react'

import { Logo } from './Logo';
import { TravelDays } from './TravelDays';
import { Friends } from './Friends';

export const IndexSidemenu:React.FC = () => {
  return(
    <div className = "w-40 flex flex-col items-center">
      <Logo />
      <TravelDays />
      <Friends />
    </div>
  );

}