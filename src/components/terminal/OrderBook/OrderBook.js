import * as React from 'react';
import { OrderList } from '@terminal/OrderList';

const ROOT_CLASS = 'order-book';

const formatTotal = (total) => {
  const totalArr = total.split('.');
  const result = totalArr.length > 1 ? `${totalArr[0]}.${totalArr[1].substring(0, 3)}${totalArr[1].length < 3 ? fillZeros(3 - totalArr[1].length) : ''}` : totalArr[0];
  return result;
}

const fillZeros = (num) => {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += '0';
  }
  return result;
}

export const OrderBook = props => {
  return (
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__caption`}>ORDERBOOK</div>
      <div className={`${ROOT_CLASS}__list-block`}>
        <div className={`${ROOT_CLASS}__name-list`}>Price.EUR</div>
        <div className={`${ROOT_CLASS}__name-list ${ROOT_CLASS}__name-list_volume`}>Volume</div>
        <div className={`${ROOT_CLASS}__name-list ${ROOT_CLASS}__name-list_total`}>Total volume</div>
      </div>
      <div className={`${ROOT_CLASS}__list ${ROOT_CLASS}__list_asks`}>
        {props.asks.map((ask, index) => {
          return (
            <OrderList
              price={ask.price}
              volume={ask.quantity}
              total={formatTotal(ask.total)}
              type="ask"
              key={ask.price}
            />
          );
        })}
      </div>
      <div className={`${ROOT_CLASS}__price-block`}>
      </div>
      <div className={`${ROOT_CLASS}__list ${ROOT_CLASS}__list_bids`}>
        {props.bids.map((bid, index) => {
          return (
            <OrderList
              price={bid.price}
              volume={bid.quantity}
              total={formatTotal(bid.total)}
              type="bid"
              key={bid.price}
            />
          );
        })}
      </div>
    </div>
  )
}
