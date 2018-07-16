import * as React from 'react';
import { OrderTimer } from './OrderTimer';
import { Utils } from '@common/Utils';

export class OrderTimerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = Utils.convertDateForOrders(props.time);
  }

  recalculate() {
    setInterval(() => {
      this.setState(Utils.convertDateForOrders(this.props.time));
    }, 1000)
  }

  render() {
    this.recalculate();
    return (
      <OrderTimer {...this.state} />
    );
  }
}
