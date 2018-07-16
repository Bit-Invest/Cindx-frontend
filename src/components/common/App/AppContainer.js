import * as React from 'react';
import { App } from './App';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { checkJWT } from '@store/modules/common';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

class AppContainer extends React.Component {
  componentWillMount() {
    if (this.props.pathname === '/') {
      this.props.push('/marketplace');
    }
  }

  render() {
    return (
      <App />
    );
  }
}

const mapStateToProps = (state) => {
  return {pathname: state.router.location.pathname};
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({checkJWT, push}, dispatch);
const connectedContainer =
  withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer));
export { connectedContainer as AppContainer };
