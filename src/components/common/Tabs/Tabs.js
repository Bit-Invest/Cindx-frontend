import * as React from 'react';

const ROOT_CLASS = 'tabs';

export const Tabs = (props) => {
  return (
    <div className={`${ROOT_CLASS} ${props.theme ? ROOT_CLASS + '_' + props.theme : ROOT_CLASS + '_order-list'}`}>
      <div className={`${ROOT_CLASS}__buttons-wrap`}>
        {props.tabs.map((tab, index) =>
          <div
            key={index}
            className={`${ROOT_CLASS}__button ${props.currentTab === index ? ROOT_CLASS + '__button_active' : ''}`}
            onClick={() => {
              let ind = index;
              props.onClickTab(ind);
            }}
          >
            {tab.title}
          </div>
        )}
      </div>
      <div className={`${ROOT_CLASS}__content-wrap`}>
        {props.children}
      </div>
    </div>
  );
}
