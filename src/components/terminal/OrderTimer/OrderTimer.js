import * as React from 'react';

const ROOT_CLASS = 'order-timer';

export const OrderTimer = (props) => (
  <div className={ROOT_CLASS}>
    <span className={`${ROOT_CLASS}__weeks`}>{props.weeks}w </span>
    <span className={`${ROOT_CLASS}__days`}>{props.days}d </span>
    <span className={`${ROOT_CLASS}__hours`}>{props.hours}h </span>
    <span className={`${ROOT_CLASS}__minutes`}>{props.minutes}m </span>
    <span className={`${ROOT_CLASS}__seconds`}>{props.seconds}s</span>
  </div>
);
