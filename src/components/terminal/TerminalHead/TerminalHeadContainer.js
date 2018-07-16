import * as React from 'react';
import { TerminalHead } from './TerminalHead';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCurrentPair, setCurrentStock } from '@store/modules/terminal';

class TerminalHeadContainer extends React.Component {

  onSelectPair = (event) => {
    const newCurrentPair = this.props.pairs.find(pair => {
      return event.payload.value === pair.symbol;
    });
    this.props.setCurrentPair(newCurrentPair);
    this.props.loadData(newCurrentPair);
  }

  onSelectStock = (event) => {
    this.props.setCurrentStock(event.payload.value);
  }

  render() {
    return (
      <TerminalHead
        onSelectPair={this.onSelectPair}
        onSelectStock={this.onSelectStock}
        currentPair={this.props.currentPair}
        pairs={this.props.pairs.map(pair => {
          return {
            value: pair.symbol,
            label: `${pair.baseAsset} / ${pair.quoteAsset}`
          };
        })}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPair: state.terminal.currentPair,
    pairs: state.terminal.pairs
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({setCurrentPair, setCurrentStock}, dispatch);

const connectedContainer =
  connect(mapStateToProps, mapDispatchToProps)(TerminalHeadContainer);

export { connectedContainer as TerminalHeadContainer };
