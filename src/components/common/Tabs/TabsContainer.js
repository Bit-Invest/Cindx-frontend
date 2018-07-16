import * as React from 'react';
import { Tabs } from './Tabs';

export class TabsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: props.activeTab ? props.activeTab : 0
    };
  }

  render() {
    return (
      <Tabs
        {...this.props}
        onClickTab={this.onClickTab.bind(this)}
        currentTab={this.state.currentTab}
      >
        {this.props.tabs[this.state.currentTab].content}
      </Tabs>
    );
  }

  onClickTab(tabIndex) {
    this.setState({currentTab: tabIndex});
  }
}
