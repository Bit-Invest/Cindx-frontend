import * as React from 'react';
import { FillOrdersList } from '@terminal/FillOrdersList';

const ROOT_CLASS = 'fill-orders';

export const FillOrders = props => {
  return (
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__list-name`}>
        <div className={`${ROOT_CLASS}__name`}>Order date</div>
        <div className={`${ROOT_CLASS}__name`}>Price BTC</div>
        <div className={`${ROOT_CLASS}__name`}>Quantity</div>
        <div className={`${ROOT_CLASS}__name`}>Total</div>
      </div>
      <div className={`${ROOT_CLASS}__hr`}></div>
      <FillOrdersList />
    </div>
  )
}
