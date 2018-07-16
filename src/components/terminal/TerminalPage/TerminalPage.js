import * as React from 'react';
import { Page } from '@common/Page';
import { TradeHistory } from '@terminal/TradeHistory';
import { OrderBook } from '@terminal/OrderBook';
import { OrdersTerminal } from '@terminal/OrdersTerminal';
import { TerminalGraph } from '@terminal/TerminalGraph';
import { TerminalHead } from '@terminal/TerminalHead';
import { OrderBlock } from '@terminal/OrderBlock';

const ROOT_CLASS = 'terminal-page';

export const TerminalPage = (props) => {
  return (
    <Page isLoaded={props.isLoaded}>
      <div className={ROOT_CLASS}>
        <div className={`${ROOT_CLASS}__1st-column`}>
          <TradeHistory history={props.history} />
          <OrderBlock />
        </div>
        <div className={`${ROOT_CLASS}__2nd-column`}>
          <TerminalHead currentPair={props.currentPair} loadData={props.loadData}/>
          <TerminalGraph chart={props.chart} />
          <OrdersTerminal openOrders={props.openOrders} />
        </div>
        <div className={`${ROOT_CLASS}__3rd-column`}>
          <OrderBook
            asks={props.orderBook.asks}
            bids={props.orderBook.bids}
          />
        </div>
      </div>
    </Page>
  );
};
