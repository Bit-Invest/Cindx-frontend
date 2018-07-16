import * as React from 'react';
import { Avatar } from '@profile/Avatar';
import DefaultAvatar from '@assets/images/avatar_default_circle.svg';
import { LogOut } from '@profile/LogOut';

const ROOT_CLASS = 'user-info';

export const UserInfo = (props) => {
  return (
    <div className={ROOT_CLASS}>
      <Avatar imageSrc={props.userImage ? props.userImage : DefaultAvatar} />
      <div className={`${ROOT_CLASS}__info`}>
        <div className={`${ROOT_CLASS}__name`}>
          {props.name}&nbsp;{props.surname}
        </div>
        <div className={`${ROOT_CLASS}__status-wrap`}>
          <div className={`${ROOT_CLASS}__kyc-status
              ${ROOT_CLASS}__kyc-status_${props.status}`}>
            <div className={`${ROOT_CLASS}__kyc-icon`}></div>
            <div className={`${ROOT_CLASS}__kyc-text`}>
              {`${props.role.toUpperCase()} APPROVED`}
            </div>
          </div>
          <div className={`${ROOT_CLASS}__log-out-wrap`}>
            <LogOut push={props.push} logOut={props.logOut} />
          </div>
        </div>
      </div>
    </div>
  );
}
