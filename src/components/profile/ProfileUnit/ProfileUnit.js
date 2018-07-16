import * as React from 'react';

const ROOT_CLASS = 'unit';

export const ProfileUnit = (props) => {
  return (
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__title`}>{props.title}</div>
      <div className={`${ROOT_CLASS}__unit
          ${ROOT_CLASS}__unit_${props.count >= 0 ? 'green' : 'red'}`}>
        {`${props.count > 0 ? '+': ''}${props.count}%`}
      </div>
    </div>
  );
}
