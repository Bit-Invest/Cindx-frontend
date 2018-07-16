import * as React from 'react';
import { Line } from 'react-chartjs-2';
import { Utils } from '@common/Utils';

const ROOT_CLASS = 'terminal-graph';

export const TerminalGraph = (props) => {
  return (
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__graph-wrap`}>
        <Line
          height={500}
          width={5000}
          data={{
            labels: props.chart.lables.map(label => Utils.convertTimeForLabel(label)),
            datasets: [{
              data: props.chart.values.map((value, index) => {
                return {
                  x: props.chart.lables[index],
                  y: value
                };
              }),
              backgroundColor: 'rgba(133, 96, 253, 0.4)',
              borderColor: '#8560fd',
              pointRadius: 0,
              borderWidth: 1
            }]
          }}
          options={{
            scales: {
              xAxes: [{
                display: true,
                position: 'bottom'
              }],
              yAxes: [{
                display: true,
                position: 'right',
              }]
            }
          }}
        />
      </div>
    </div>
  );
};
