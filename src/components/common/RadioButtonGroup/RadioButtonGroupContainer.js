import * as React from 'react';
import { RadioButtonGroup } from './RadioButtonGroup';

export class RadioButtonGroupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRadio: 0
    };
  }

  render() {
    return (
      <RadioButtonGroup
        onClickRadio={this.onClickRadio.bind(this)}
        activeRadio={this.state.activeRadio}
        radios={this.props.radios}
      />
    );
  }

  onClickRadio(value, index) {
    this.props.onClick && this.props.onClick(index);
    this.setState({activeRadio: index});
  }
}
