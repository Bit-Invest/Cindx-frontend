import React from 'react';

const ROOT_CLASS = 'profile-product';

// const statusConnect = ['Connected to BNX', 'Disconnected', 'Free to Use'];

const statusConnect = {
  pending: 'Pending',
  invalid: 'Invalid',
  valid: 'Valid'
}

export const ProfileProduct = props => {
  return (
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__exchange ${ROOT_CLASS}__exchange_${props.stock}`}></div>
      <div className={`${ROOT_CLASS}__block-currency`}>
        <div className={`${ROOT_CLASS}__img-currency-btc`}></div>
        <div className={`${ROOT_CLASS}__number`}>{props.number}</div>
      </div>
      <div className={`${ROOT_CLASS}__block-currency`}>
        <div className={`${ROOT_CLASS}__img-currency-usd`}></div>
        <div className={`${ROOT_CLASS}__number`}>{props.number2}</div>
      </div>
      <div className={`${ROOT_CLASS}__result-connect ${ROOT_CLASS}__result-connect_${props.status}`}>
        {statusConnect[props.status]}
      </div>
    </div>
  );
}
