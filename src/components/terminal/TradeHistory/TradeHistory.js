import * as React from 'react';
import { HistoryList } from '@terminal/HistoryList';
import { Utils } from '@common/Utils';

const ROOT_CLASS = 'trader-history';

export const TradeHistory = props => {
  return (
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__caption`}>TRADE HISTORY</div>
      <div className={`${ROOT_CLASS}__list-block`}>
        <div className={`${ROOT_CLASS}__name-list`}>Trade Size</div>
        <div className={`${ROOT_CLASS}__name-list`}>Price</div>
        <div className={`${ROOT_CLASS}__name-list`}>Time</div>
      </div>
      <div className={`${ROOT_CLASS}__list`}>
        {props.history.map((trade, index) => {
          return (
            <HistoryList
              price={trade.price}
              qty={trade.quantity}
              time={Utils.convertDateForTerminal(trade.time)}
              isUp={trade.maker}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}
