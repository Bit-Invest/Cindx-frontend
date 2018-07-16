import * as React from 'react';
import { Select } from './select';

export class selectContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpened: false,
      currentOption: {
        label: props.defaultOption ? props.defaultOption.label : '',
        value: props.defaultOption ? props.defaultOption.value : ''
      }
    }
  }

  onSelect = (option) => {
    this.props.onChange && this.props.onChange(option);
    this.setState({currentOption: option.payload, isOpened: false});
  }

  handleSelectChange = () => {
    this.setState({ isOpened: !this.state.isOpened }, () => {
      if (this.state.isOpened) {
        document.addEventListener('click', this.handleOutsideClick);
      }
    });
  }

  handleOutsideClick = () => {
    this.setState({ isOpened: false });
    document.removeEventListener('click', this.handleOutsideClick);
  }

  render() {
    return (
      <Select
        {...this.props}
        handleSelectChange={this.handleSelectChange}
        isOpened={this.state.isOpened}
        currentOption={this.state.currentOption}
        onSelect={this.onSelect}
      />
    );
  }
}
