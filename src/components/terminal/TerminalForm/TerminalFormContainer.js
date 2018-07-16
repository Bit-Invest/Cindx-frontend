import * as React from 'react';
import { TerminalForm } from './TerminalForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { placeLimitOrder } from '@store/modules/terminal';
import { LocalStorage } from '@common/Utils';
import { socketSubscribe, addAlert } from '@store/modules/common';

class TerminalFormContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      price: '',
      value: '',
      total: ''
    }
    props.socketSubscribe({
      message: 'ORDER_LIMIT_SUCCESS',
      callback: this.onOrderSuccess
    });
    props.socketSubscribe({
      message: 'ORDER_LIMIT_ERR',
      callback: this.onOrderError
    });
  }

  handleEnter = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  onOrderError = res => {
    this.props.addAlert({
      type: 'error',
      iconType: 'face',
      description: res.error.message
    });
  }

  onOrderSuccess = res => {
    this.props.addAlert({
      type: 'info',
      iconType: 'graph',
      description: 'Order placed'
    });
  }

  clearState = () => {
    this.setState({
      price: '',
      value: '',
      total: ''
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.placeLimitOrder({
      jwt: LocalStorage.getItem('token'),
      key: this.props.currentProduct.id,
      endpoint: {
        payload: {
          name: this.props.currentProduct.stock,
          symbol: this.props.currentPair.symbol,
          side: this.props.type.toUpperCase(),
          type: this.props.orderType.toUpperCase(),
          quantity: this.state.value,
          price: this.state.price
        }
      }
    });
  }

  render() {
    return (
      <TerminalForm
        type={this.props.type}
        orderType={this.props.orderType}
        currentPair={this.props.currentPair}
        handleEnter={this.handleEnter}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({placeLimitOrder, socketSubscribe, addAlert}, dispatch);

const mapStateToProps = state => {
  return {
    currentProduct: state.user.burses.find(burse => {
      return burse.stock === state.terminal.currentStock;
    }),
    currentPair: state.terminal.currentPair
  };
}

const connectedContainer =
  connect(mapStateToProps, mapDispatchToProps)(TerminalFormContainer);

export { connectedContainer as TerminalFormContainer };
