import React from 'react';
import CardItem from './CardItem';
import VerticalLine from './VerticalLine';
import Time from './Time';

const CardList: React.FC = () => {
  return (
    <div className="">
      <Time />
      <div className="flex">
        <VerticalLine />
        <CardItem />
      </div>
      <div className="flex">
        <VerticalLine />
        <CardItem />
      </div>
    </div>
  );
};

export default CardList;
