import React from 'react';
import { Button } from '@components/common/Button';
import { ProfileProduct } from '../ProfileProduct';

const ROOT_CLASS = 'list-products';

export const ListProducts = props => {

  const renderTitle = () => {
    return (
      <div className={`${ROOT_CLASS}__list-title`}>
        You need to add new API Keys
      </div>
    );
  }

  const renderProducts = () => {
    let res = [];
    props.products.forEach((product, index) => {
      res.push(<ProfileProduct {...product} key={index} />);
    });
    return res;
  }

  const renderList = () => {
    let result;
    props.products.length > 0 ?
      result = renderProducts() :
      result = renderTitle();
    return result;
  }

  return (
    <div>
      <div className={ROOT_CLASS}>
        <div className={`${ROOT_CLASS}__button-block`}>
          <div className={`${ROOT_CLASS}__caption`}>Current Fund’s API</div>
          <div className={`${ROOT_CLASS}__button-block`}>
            <div className={`${ROOT_CLASS}__help`}>Where to get API Key?</div>
            <Button
              theme='product-btn'
              NameBtn="Add new API"
              onClick={() => {props.onClickAddProduct()}}
            />
          </div>
        </div>
        <div className={`${ROOT_CLASS}__list`}>
          {renderList()}
        </div>
      </div>
    </div>
  );
};
