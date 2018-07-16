import * as React from 'react';
import { Menu } from './Menu';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { showPopUp } from '@store/modules/common';

class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.currentPage = props.page;
  }

  render() {
    this.currentPage = this.props.page;
    return (
      <Menu {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.user};
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({push, showPopUp}, dispatch);

const connectedContainer =
  connect(mapStateToProps, mapDispatchToProps)(MenuContainer);

export {connectedContainer as MenuContainer};
