import * as React from 'react';
import { PopUpManager } from './PopUpManager';
import * as PopUpComponents from '@common/PopUps';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hidePopUp } from '@store/modules/common';

const PopUps = {
  registration: PopUpComponents.PopUpRegistration,
  comingSoon: PopUpComponents.PopUpComingSoon,
  newProduct: PopUpComponents.PopUpNewProduct,
  productPage: PopUpComponents.PopUpProductPage
};

class PopUpManagerContainer extends React.Component {
  render() {
    return (
      <PopUpManager
        isShowed={this.props.currentPopUp ? true : false}
        onClickClose={this.onClickClose.bind(this)}
      >
        {this.renderPopUp()}
      </PopUpManager>
    );
  }

  renderPopUp() {
    let result = null;
    if (this.props.currentPopUp) {
      const PopUp = PopUps[this.props.currentPopUp];
      result = <PopUp {...this.props.popUpData} />
    }
    return result;
  }

  onClickClose() {
    this.props.hidePopUp();
  }
}

const mapStateToProps = state => ({
  currentPopUp: state.common.currentPopUp,
  popUpData: state.common.popUpData
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({hidePopUp}, dispatch);

const connectedContainer =
  connect(mapStateToProps, mapDispatchToProps)(PopUpManagerContainer);

export { connectedContainer as PopUpManagerContainer };
