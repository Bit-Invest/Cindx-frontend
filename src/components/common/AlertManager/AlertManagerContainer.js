import * as React from 'react';
import { AlertManager } from './AlertManager';
import { connect } from 'react-redux';

class AlertManagerContainer extends React.Component {
  render() {
    return <AlertManager {...this.props} />
  }
}

const mapStateToProps = state => {
  return {alerts: state.common.alerts};
}

const connectedContainer =
  connect(mapStateToProps, null)(AlertManagerContainer);
export { connectedContainer as AlertManagerContainer };
