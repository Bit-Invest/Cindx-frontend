import * as React from 'react';
import { MenuItem } from '@common/MenuItem';

const ROOT_CLASS = 'menu';

const INVESTOR_ITEMS = ['marketplace', 'saved', 'billing', 'profile', 'help'];
const TRADER_ITEMS = ['terminal', 'marketplace', 'saved', 'billing', 'profile', 'help'];
const ITEMS = ['terminal', 'marketplace', 'saved', 'billing', 'profile', 'help'];
const inDev = ['billing', 'help', 'saved'];
const onlyRegistrated = ['profile'];

export const Menu = (props) => {
  const buildRootClass = () => {
    return `${ROOT_CLASS} ${ROOT_CLASS}_${props.page}`;
  }
  const items = props.user.personalInfo ?
    (props.user.personalInfo.role === 'trader' && props.user.burses.find(burse => {
      return burse.status === 'valid';
    }) ? TRADER_ITEMS : INVESTOR_ITEMS) :
    ITEMS;
  return (
    <div className={buildRootClass()}>
      <div className={`${ROOT_CLASS}__items`}>
        <div className={`${ROOT_CLASS}__logo`}></div>
          {items.map((item, index) => renderItem(props, item, index))}
      </div>
    </div>
  );
}

const renderItem = (props, item, index) => {
  return (
    <div className={`${ROOT_CLASS}__item-wrap`} key={index}>
      <MenuItem
        user={props.user}
        type={item}
        isActive={props.page === item}
        popUp={
          inDev.indexOf(item) >= 0 ?
          'inDev' : onlyRegistrated.indexOf(item) >= 0 ?
          'onlyRegistrated' : null
        }
        push={props.push}
        showPopUp={props.showPopUp}
        page={props.page}
      />
    </div>
  );
}
