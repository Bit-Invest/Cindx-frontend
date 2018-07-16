import * as React from 'react';

const ROOT_CLASS = 'avatar';

export const Avatar = (props) => {
  return (
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__circle`}>
        <img
          src={props.imageSrc}
          className={`${ROOT_CLASS}__picture`}
          alt="avatar"
        />
      </div>
    </div>
  );
}
