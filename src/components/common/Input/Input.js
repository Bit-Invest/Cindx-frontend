import * as React from 'react';

const ROOT_CLASS = 'input';

const rootClass = (props) => {
  return `${ROOT_CLASS} ${props.theme ? ROOT_CLASS + '_' + props.theme : ''}
    ${props.isError ? ' ' + ROOT_CLASS + '_error' : ''}`;
}

const renderTip = (props) => {
  let result = null;
  if (props.tip) {
    result = (<div className={`${ROOT_CLASS}__tip`}>{props.tip}</div>);
  }
  return result;
}

const renderStar = (props) => {
  let result = null;
  if (props.required) {
    result = (<div className={`${ROOT_CLASS}__star`}>*</div>);
  }
  return result;
}

export const Input = (props) => (
  <div className={rootClass(props)}>
    <input
      className={`${ROOT_CLASS}__input`}
      onChange={props.onInput}
      type={props.type ? props.type : ''}
      name={props.name ? props.name : ''}
      placeholder={props.placeholder ? props.placeholder : ''}
      disabled={props.disabled}
    />
    {renderTip(props)}
    {renderStar(props)}
  </div>
);
