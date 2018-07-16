import * as React from 'react';
import { TextArea } from './TextArea';

export class TextAreaContainer extends React.Component {

  onInput = (event) => {
    const { onChange } = this.props;
    onChange && onChange(event);
  }

  render() {
    return (
      <TextArea onChange={this.onInput} areaProps={this.props.areaProps} />
    );
  }
}
