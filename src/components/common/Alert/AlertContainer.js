import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeAlert } from '@store/modules/common';
import { Alert } from './Alert';


class AlertContainer extends React.Component {
  render() {
    setTimeout(() => {
      this.props.removeAlert(this.props.id);
    }, 10000)
    return <Alert {...this.props} />
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({removeAlert}, dispatch);

const connectedContainer = connect(null, mapDispatchToProps)(AlertContainer);
export { connectedContainer as AlertContainer };
