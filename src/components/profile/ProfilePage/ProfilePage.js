import * as React from 'react';
import { Page } from '@components/common/Page';
import { ProfileHead } from '@components/profile/ProfileHead';
import { ListProducts } from '@profile/ListProducts';

export const ProfilePage = props => {
  return (
    <Page isLoaded={props.isLoaded}>
      <ProfileHead
        personalInfo={props.user.personalInfo ? props.user.personalInfo : {}}
        push={props.push}
        logOut={props.userLogOut}
      />
      <ListProducts
        onClickAddProduct={props.onClickAddProduct}
        products={props.user.burses ? props.user.burses : []}
      />
    </Page>
  );
};
