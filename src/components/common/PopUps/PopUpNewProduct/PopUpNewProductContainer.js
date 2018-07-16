import * as React from 'react';
import { PopUpNewProduct } from './PopUpNewProduct';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addExchange } from '@store/modules/user';
import { hidePopUp } from '@store/modules/common';
import { getKeys, apiKeySubscribe } from '@store/modules/user';

class PopUpNewProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 'binance',
      ApiKey: '',
      secretKey: '',
      info: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      key: {
        name: this.state.select,
        key: this.state.ApiKey,
        apiSecret: this.state.secretKey,
        info: this.state.info
      }
    };
    const { addExchange } = this.props;
    this.props.apiKeySubscribe();
    addExchange(data);
    this.props.getKeys();
    this.props.hidePopUp();
  };


  handleSelectChange(event) {
    this.setState({ select: event.payload.value });
  }

  handleAPIChange(event) {
    this.setState({ ApiKey: event.target.value });
  }

  handleSecretKeyChange(event) {
    this.setState({ secretKey: event.target.value });
  }

  handleAreaChange(event) {
    this.setState({ info: event.target.value });
  }

  render() {
    const {
      handleSubmit,
      handleSelectChange,
      handleAPIChange,
      handleSecretKeyChange,
      handleAreaChange
    } = this;
    return <PopUpNewProduct
      handleSubmit={handleSubmit.bind(this)}
      handleSelectChange={handleSelectChange.bind(this)}
      handleAPIChange={handleAPIChange.bind(this)}
      handleSecretKeyChange={handleSecretKeyChange.bind(this)}
      handleAreaChange={handleAreaChange.bind(this)}
      role={this.props.role}
    />;
  }
}

const mapStateToProps = state => {
  return {role: state.user.personalInfo.role};
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {addExchange, hidePopUp, getKeys, apiKeySubscribe}, dispatch);

const connectedContainer =
  connect(mapStateToProps, mapDispatchToProps)(PopUpNewProductContainer);

export {connectedContainer as PopUpNewProductContainer};
