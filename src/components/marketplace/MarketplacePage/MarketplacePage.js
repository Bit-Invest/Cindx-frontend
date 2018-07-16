import * as React from 'react';
import { TraderCard } from '../TraderCard';
import { TraderCardList } from '../TraderCardList';
import { Page } from '@common/Page';

const ROOT_CLASS = 'marketplace-page';

const ProductTypes = {
  CARD: TraderCard,
  LIST_ELEM: TraderCardList
};

export const MarketplacePage = props => {
  const ProductCard = ProductTypes[props.showType];
  return (
    <Page isLoaded={props.isLoaded}>
      <div className={`${ROOT_CLASS}__filter`}>
        <div className={`${ROOT_CLASS}__card`} onClick={props.onClickCard}></div>
        <div className={`${ROOT_CLASS}__list`} onClick={props.onClickList}></div>
      </div>
      <div className={ROOT_CLASS}>
        {props.cards.map((card, index) => <ProductCard {...card} key={index}/>)}
      </div>
    </Page>
  );
};
