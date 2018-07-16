import * as React from 'react';
import { OrderBlock } from './OrderBlock';

export class OrderBlockContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOrder: 'buy',
      orderType: 'Limit'
    };
  }

  onClickType = (type) => {
    this.setState({currentOrder: type});
  }

  onClickOrderType = (type) => {
    this.setState({orderType: type});
  }

  render() {
    return (
      <OrderBlock
        activeType={this.state.currentOrder}
        orderType={this.state.orderType}
        onClickType={this.onClickType}
        onClickOrderType={this.onClickOrderType}
      />
    );
  }
}
