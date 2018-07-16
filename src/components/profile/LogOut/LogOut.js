import * as React from 'react';
import { LocalStorage } from '@common/Utils';

const ROOT_CLASS = 'log-out';

export const LogOut = (props) => {
  const onClick = () => {
    LocalStorage.removeItem('token');
    props.logOut();
    props.push('/marketplace');
  }

  return (
    <div className={ROOT_CLASS} onClick={onClick}>
      <div className={`${ROOT_CLASS}__icon`}></div>
      <div className={`${ROOT_CLASS}__title`}>LOG OUT</div>
    </div>
  );
};
