import * as React from 'react';

const ROOT_CLASS = 'input';

export const InputTerminal = props => {

  const buildRootClass = () => {
    return (
      ROOT_CLASS +
      (props.theme ? `${ROOT_CLASS}_${props.theme}` : '')
    );
  };

  return (
    <div className='input-terminal'>
      <input className={buildRootClass()} />
      <div className={`${ROOT_CLASS}__currency`}>{props.curency}EUR</div>
    </div>
  )
}
