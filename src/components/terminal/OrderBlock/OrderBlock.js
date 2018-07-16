import * as React from 'react';
import { TerminalForm } from '@terminal/TerminalForm';

const ROOT_CLASS = 'order-block';

const orderTypes = ['Limit'];
const types = ['buy', 'sell'];

export const OrderBlock = (props) => (
  <div className={ROOT_CLASS}>
    <div className={`${ROOT_CLASS}__order-buttons`}>
      {orderTypes.map((orderType, index) =>
        <div
          className={
            `${ROOT_CLASS}__order-button ${orderType === props.orderType ?
              ROOT_CLASS + '__order-button_active' : ''}`
          }
          onClick={() => {
            let name = orderType;
            props.onClickOrderType(name);
          }}
          key={index}
        >
          {orderType}
        </div>
      )}
    </div>
    <div className={`${ROOT_CLASS}__order-types`}>
      {types.map((type, index) =>
        <div
          className={
            `${ROOT_CLASS}__order-type
            ${ROOT_CLASS}__order-type_${type}
            ${props.activeType === type ?
              ROOT_CLASS + '__order-type_active' :
              ''
            }`
          }
          onClick={(event) => {
            let name = type;
            props.onClickType(name);
          }}
          key={index}
        >
          {type.toUpperCase()}
        </div>
      )}
    </div>
    <div className={`${ROOT_CLASS}__form-wrap`}>
      <TerminalForm type={props.activeType} orderType={props.orderType}/>
    </div>
  </div>
);
