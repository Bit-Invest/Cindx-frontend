import * as React from 'react';
import { ResetPasswordForm } from './ResetPasswordForm';
import PropTypes from 'prop-types';
import { resetPassword } from '@store/modules/registration';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class ResetPasswordFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isError: false
    };
  }

  static propTypes = {
    resetPassword: PropTypes.func,
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      resetPassword
    } = this.props;
    resetPassword({email: this.state.email})
      .then(this.onConfirmCheck.bind(this))
      .catch(this.onCheckFail.bind(this));
  };

  onConfirmCheck(res) {
    this.props.push('/registration/check-email');
  }

  onCheckFail() {
    this.setState({isError: true});
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    const {
      handleEmailChange,
      handleSubmit
    } = this;
    return <ResetPasswordForm
      handleSubmit={handleSubmit}
      handleEmailChange={handleEmailChange}
      isError={this.state.isError}
    />;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({resetPassword, push}, dispatch);

const connectedContainer =
  connect(null, mapDispatchToProps)(ResetPasswordFormContainer);

export {connectedContainer as ResetPasswordFormContainer};
