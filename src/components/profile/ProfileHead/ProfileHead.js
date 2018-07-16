import React from 'react';
import { UserInfo } from '@profile/UserInfo';

const ROOT_CLASS = 'profile-head';

export const ProfileHead = props => {
  return (
    <div className={ROOT_CLASS}>
      <UserInfo
        name={props.personalInfo.name}
        surname={props.personalInfo.surname}
        role={props.personalInfo.role ? props.personalInfo.role : ''}
        status="disabled"
        push={props.push}
        logOut={props.logOut}
      />
    </div>
  );
};
