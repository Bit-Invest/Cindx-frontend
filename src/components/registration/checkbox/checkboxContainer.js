import * as React from 'react';
import { Checkbox } from './checkbox';

export class checkboxContainer extends React.Component {
  render() {
    return <Checkbox {...this.props} />;
  }
}
