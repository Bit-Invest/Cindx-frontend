import * as React from 'react';
import { Select } from '@registration/select';

const ROOT_CLASS = 'terminal-head';

export const TerminalHead = props => {
  return (
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__stock-select`}>
        <Select
          onChange={props.onSelectStock}
          name='select'
          theme='terminal'
          value='Binnance'
          defaultOption={
            {
              value: 'Binnance',
              label: 'Binnance'
            }
          }
          options={[
            {
              value: 'Binnance',
              label: 'Binnance'
            }
          ]}
        />
      </div>
      <div className={`${ROOT_CLASS}__pair-select`}>
        <Select
          onChange={props.onSelectPair}
          name='select'
          theme='terminal'
          defaultOption={
            {
              value: props.currentPair.symbol,
              label: `${props.currentPair.baseAsset}${' '}
                / ${props.currentPair.quoteAsset}`
            }
          }
          options={props.pairs}
        />
      </div>
      <div className={`${ROOT_CLASS}__type-select`}>
        <Select
          onChange={props.handleEnter}
          name='select'
          theme='terminal'
          defaultOption={
            {
              value: 'Line',
              label: 'Line'
            }
          }
          options={[
            {
              value: 'Line',
              label: 'Line'
            }
          ]}
        />
      </div>
    </div>
  )
}
