import * as React from 'react';
import { Page } from './Page'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class PageContainer extends React.Component {
  render() {
    return (
      <Page isLoaded={this.props.isLoaded} push={this.props.push} page={this.props.page}>
        {this.props.children}
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {page: state.router.location.pathname.substring(1)};
}

const mapDispatchToProps = dispatch => bindActionCreators({push}, dispatch);
const connectedContainer =
  connect(mapStateToProps, mapDispatchToProps)(PageContainer);
export { connectedContainer as PageContainer };
