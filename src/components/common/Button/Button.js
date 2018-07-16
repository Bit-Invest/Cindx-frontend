import React from 'react';

const ROOT_CLASS = 'button';

export const Button = props => {
  const buildRootClass = () => {
    return (
      ROOT_CLASS +
      (props.theme ? ` ${ROOT_CLASS}_${props.theme}` : '') +
      (props.noImage ? `${ROOT_CLASS}_btn-img-none` : '')
    );
  };

  return (
    <button className={buildRootClass()} onClick={props.onClick}>
      <div className={`${ROOT_CLASS}__btn-title`}>{props.NameBtn}</div>
      <div className={`${ROOT_CLASS}__${props.preloader ? 'btn-img' : ''}`} />
    </button>
  );
};
