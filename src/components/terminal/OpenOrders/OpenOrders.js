import * as React from 'react';
import { OpenOrderList } from '@terminal/OpenOrderList';

const ROOT_CLASS = 'open-orders';

export const OpenOrders = props => {
  return (
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__list-name`}>
        <div className={`${ROOT_CLASS}__name`}>Order date</div>
        <div className={`${ROOT_CLASS}__name`}>Price BTC</div>
        <div className={`${ROOT_CLASS}__name`}>Origin</div>
        <div className={`${ROOT_CLASS}__name`}>Remain</div>
        <div className={`${ROOT_CLASS}__name`}>Total</div>
      </div>
      <div className={`${ROOT_CLASS}__hr`}></div>
      <div className={`${ROOT_CLASS}__orders`}>
        {props.orders.map((order, index) =>
          <OpenOrderList
            time={order.time}
            price={order.price}
            origin={order.origQty}
            remain={order.executedQty}
            total={order.price * order.origQty}
            key={index}
          />
        )}
      </div>
    </div>
  )
}
