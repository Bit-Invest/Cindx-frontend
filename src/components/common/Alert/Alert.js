import * as React from 'react';

const ROOT_CLASS = 'alert';

export const Alert = (props) => (
  <div className={`${ROOT_CLASS} ${ROOT_CLASS}_${props.type}`}>
    <div className={`${ROOT_CLASS}__info`}>
      <div
        className=
          {`${ROOT_CLASS}__icon ${ROOT_CLASS}__icon_${props.iconType}`}
      >
      </div>
      <div className={`${ROOT_CLASS}__description`}>{props.description}</div>
    </div>
    <div
      className={`${ROOT_CLASS}__close`}
      onClick={() => {props.removeAlert(props.id)}}
    >
      <div className={`${ROOT_CLASS}__check`}></div>
    </div>
  </div>
);
