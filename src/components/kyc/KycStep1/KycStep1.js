import * as React from 'react';
import { Checkbox } from '@registration/checkbox';
import { Select } from '@registration/select';
import { Button } from '@components/common/Button';

const ROOT_CLASS = 'kyc-step1';

export const KycStep1 = props => {
  return (
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__checkbox-block`}>
        <Checkbox
          checked={props.checked}
          onChange={props.handleCheckboxChange}
        />
        <div className={`${ROOT_CLASS}__checkbox-info`}>
          I give my consent to process and store my personal data for the purpose of verifying my identity.
        </div>
      </div>
      <div className={`${ROOT_CLASS}__checkbox-block`}>
        <Checkbox
          checked={props.checked}
          onChange={props.handleCheckboxChange}
        />
        <div className={`${ROOT_CLASS}__checkbox-info`}>
          I give my consent to process my personal data for the purposes and conditions set out in the <span className={`${ROOT_CLASS}__span`}>Privacy Policy</span>.
        </div>
      </div>
      <Select
        onChange={this.handleSelectChange}
        NameSelect1='Choose your country'
      />
      <Button theme="gradient-img" NameBtn="Proceed" />
      <div className={`${ROOT_CLASS}__href`}>Skip this Step</div>
    </div>
  );
};
