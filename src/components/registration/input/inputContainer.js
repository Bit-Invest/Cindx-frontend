import * as React from 'react';
import { Input } from './input';

export class InputContainer extends React.Component {
  render() {
    return <Input {...this.props} />;
  }
}
