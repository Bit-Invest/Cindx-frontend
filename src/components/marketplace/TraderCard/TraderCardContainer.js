import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TraderCard } from './TraderCard';
import { showPopUp } from '@store/modules/common';

class TraderCardContainer extends React.Component {
  render() {
    return(
      <TraderCard
        onClick={this.onClickRoot.bind(this)}
        nameStor={this.props.nameStor}
        name={this.props.name}
        surname={this.props.surname}
        {...this.props}
      />
    );
  }

  onClickRoot() {
    this.props.showPopUp('productPage', {
      id: this.props.id,
      nameStor: this.props.nameStor,
      name: this.props.name,
      surname: this.props.surname,
      info: this.props.info,
      followersCount: this.props.followersCount
    });
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({showPopUp}, dispatch);

const connectedContainer =
  connect(null, mapDispatchToProps)(TraderCardContainer);

export {connectedContainer as TraderCardContainer};
