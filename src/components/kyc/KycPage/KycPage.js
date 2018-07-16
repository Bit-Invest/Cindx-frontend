import * as React from 'react';
// import { KycStep1 } from '@components/kyc/KycStep1';
import { KycStep2 } from '@components/kyc/KycStep2';

const ROOT_CLASS = 'kyc-page';

export const KycPage = props => {
  return (
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__left-block`}>
        <div className={`${ROOT_CLASS}__logo`}></div>
        <div className={`${ROOT_CLASS}__tittle`}>
          KYC Accaunt verification
        </div>
          {/*<KycStep1 />*/}
          <KycStep2 />
        <div className={`${ROOT_CLASS}__footer`}>
          © 2018 CryptoActive | Privacy Policy & Terms of Service
        </div>
      </div>
      <div className={`${ROOT_CLASS}__right-block`}></div>
    </div>
  );
};
