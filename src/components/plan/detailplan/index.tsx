import React from 'react';
import { Header } from './header/Header';
import CardList from './planlist/CardList';

const index = () => {
  return (
    <div className="w-[400px] flex flex-col px-[35px] py-[20px]">
      <Header />
      <CardList />
    </div>
  );
};

export default index;
