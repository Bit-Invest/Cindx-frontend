import * as React from 'react';
import { IconUser } from '@components/profile/IconUser/IconUser';
import { UserName } from '@components/profile/UserName/UserName';
import { Rating } from '@components/marketplace/Rating/Rating';
import { PercentResult } from '@common/PercentResult';
import { Line } from 'react-chartjs-2';
import { Utils } from '@common/Utils';

const ROOT_CLASS = 'trader-card';

export const TraderCard = props => {

  return (
    <div className={ROOT_CLASS} onClick={props.onClick}>
      <div className={`${ROOT_CLASS}__block-exchange`}>
        <div className={`${ROOT_CLASS}__exchange`}>{props.nameStor}</div>
        <div className={`${ROOT_CLASS}__currencyPair`}>BTC/ETH</div>
        <div className={`${ROOT_CLASS}__save-block`}></div>
      </div>
      <div className={`${ROOT_CLASS}__graf`}>
        <Line
          height={80}
          width={208}
          data={{
            labels: ['', '', '', '', ''],
            datasets: [{
              data: [
                {x: 20, y: Utils.randomInt(0, 100)},
                {x: 30, y: Utils.randomInt(0, 100)},
                {x: 40, y: Utils.randomInt(0, 100)},
                {x: 50, y: Utils.randomInt(0, 100)},
                {x: 60, y: Utils.randomInt(0, 100)}
              ],
              backgroundColor: 'rgba(133, 96, 253, 0.4)',
              borderColor: '#8560fd',
              pointRadius: 1,
              borderWidth: 1
            }],

          }}
          options={{
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: false,
                position: 'bottom'
              }],
              yAxes: [{
                display: false,
                position: 'right'
              }]
            }
          }}
        />
      </div>
      <div className={`${ROOT_CLASS}__result-block`}>
        <div className={`${ROOT_CLASS}__result-block-data`} >
          <div className={`${ROOT_CLASS}__block-data`}>Week &nbsp;</div>
          <PercentResult count={17} size="small" />
        </div>
        <div className={`${ROOT_CLASS}__result-block-data`}>
          <div className={`${ROOT_CLASS}__block-data`}>Month &nbsp;</div>
          <PercentResult count={-21} size="small" />
        </div>
      </div>
      <div className={`${ROOT_CLASS}__position-trade`}>
        <div className={`${ROOT_CLASS}__position-trade-block`}>
          <div>Horizon</div>
          <div className={`${ROOT_CLASS}__dynamic-info`}>LONG</div>
        </div>
        <div className={`${ROOT_CLASS}__position-trade-block`}>
          <div>Fees</div>
          <div className={`${ROOT_CLASS}__dynamic-info`}>10%</div>
        </div>
        <div className={`${ROOT_CLASS}__position-trade-block`}>
          <div>Investors</div>
          <div className={`${ROOT_CLASS}__dynamic-info`}>{props.followersCount}</div>
        </div>
      </div>
      <div className={`${ROOT_CLASS}__user-block`}>
        <div className={`${ROOT_CLASS}__icon-user-wrap`}>
          <IconUser />
        </div>
        <div>
          <div className={`${ROOT_CLASS}__user-name-block`}>
            <UserName
              name={props.name}
              surname={`${props.surname[0]}.`}
              theme='MarketPlaceName'
            />
          </div>
          <div className={`${ROOT_CLASS}__rating-block`}>
            <Rating rating={5}/>
          </div>
        </div>
      </div>
    </div>
  );
};
