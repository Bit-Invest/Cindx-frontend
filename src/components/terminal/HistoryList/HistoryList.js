import * as React from 'react';

const ROOT_CLASS = 'history-list';

export const HistoryList = props => {
  return (
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__trade-size`}>{props.qty}</div>
      <div
        className=
        {`${ROOT_CLASS}__price ${props.isUp ? ROOT_CLASS + '__price_up' : ''}`}
      >
        {props.price}
      </div>
      <div className={`${ROOT_CLASS}__time`}>{props.time}</div>
    </div>
  )
}
