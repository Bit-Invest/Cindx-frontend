import * as React from 'react';

const ROOT_CLASS = 'order-list';

export const OrderList = props => {
  return (
    <div className={ROOT_CLASS}>
      <div
        className={`${ROOT_CLASS}__price-currency ${ROOT_CLASS}__price-currency_${props.type}`}
      >
        {props.price}
      </div>
      <div className={`${ROOT_CLASS}__volume`}>{props.volume}</div>
      <div className={`${ROOT_CLASS}__total-volume`}>{props.total}</div>
    </div>
  )
}
