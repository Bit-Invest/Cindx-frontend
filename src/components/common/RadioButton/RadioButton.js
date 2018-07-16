import * as React from 'react';

const ROOT_CLASS = 'radio-button';

export const RadioButton = (props) => {
  const buildRootClass = () => {
    return `${ROOT_CLASS} ${props.isActive ? ROOT_CLASS + '_active': ''}`;
  }

  return (
    <div
      className={buildRootClass()}
      onClick={
        () => {props.onChange && props.onChange(!props.isActive, props.index)}}
    >
      <div className={`${ROOT_CLASS}__circle`}>
        <div className={`${ROOT_CLASS}__fill`}></div>
      </div>
      <div className={`${ROOT_CLASS}__title`}>
        {props.title}
      </div>
    </div>
  );
}
