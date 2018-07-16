import React from 'react';

const ROOT_CLASS = 'user-name';

export const UserName = props => {
  const MarketPlaceTeame = () => {
    return (
      ROOT_CLASS +
      (props.theme ? ` ${ROOT_CLASS}_${props.theme}` : '')
    );
  };
  return (
    <div className='user-name-block'>
      <div className={MarketPlaceTeame()}>{props.name}&nbsp;</div>
      <div className={MarketPlaceTeame()}>{props.surname}</div>
    </div>
  );
};
