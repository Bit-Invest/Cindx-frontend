import * as React from 'react';
import { Input } from './Input';

export class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '',
      isError: false
    };
  }

  render() {
    return (
      <Input
        {...this.props}
        onInput={this.onInput.bind(this)}
      />
    );
  }

  onInput(event) {
    const onChange = this.props.onChange;
    this.setState({currentValue: event.target.value});
    onChange && onChange(event);
  }
}
