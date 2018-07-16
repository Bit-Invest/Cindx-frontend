import * as React from 'react';

const ROOT_CLASS = 'percent-result';

export const PercentResult = (props) => {

  const buildRootClass = () => {
    return ROOT_CLASS + ' ' +
      (props.size ? `${ROOT_CLASS}_${props.size}` : `${ROOT_CLASS}_medium`) +
      ' ' + (props.count >= 0 ? `${ROOT_CLASS}_green` : `${ROOT_CLASS}_red`);
  }

  return (
    <div className={buildRootClass()}>
      <span className={`${ROOT_CLASS}__sign`}>
        {props.count > 0 ? '+' : ''}
      </span>
      <span className={`${ROOT_CLASS}__count`}>{props.count}%</span>
    </div>
  );
}
