import * as React from 'react';
// import { Checkbox } from '@registration/checkbox';
// import { Select } from '@registration/select';
import { Button } from '@components/common/Button';

const ROOT_CLASS = 'kyc-step2';

export const KycStep2 = props => {
  return (
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__step-block`}>
        <div className={`${ROOT_CLASS}__circle-filled`}>1</div>
        <div className={`${ROOT_CLASS}__border`} />
        <div className={`${ROOT_CLASS}__circle`}>2</div>
        <div className={`${ROOT_CLASS}__border`} />
        <div className={`${ROOT_CLASS}__circle`}>3</div>
      </div>
      <div className={`${ROOT_CLASS}__circle-text-block`}>
        <div className={`${ROOT_CLASS}__circle-text-filled`}>
          Proof of identity
        </div>
        <div className={`${ROOT_CLASS}__circle-text`}>
          Selfie with the proof
        </div>
        <div className={`${ROOT_CLASS}__circle-text`}>
          Proof of adress
        </div>
      </div>
      <div className={`${ROOT_CLASS}__info`}>
        Please take a photo of your passport. The photo should be bright and clear, and all corners of your document must be visible.
      </div>
      <Button theme="gradient-img" NameBtn="Proceed" />
      <div className={`${ROOT_CLASS}__href`}>Go Back</div>
    </div>
  );
};
