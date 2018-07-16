import * as React from 'react';
import { RadioButton } from '@common/RadioButton';

const ROOT_CLASS = 'radio-button-group';

export const RadioButtonGroup = (props) => {
  return (
    <div className={ROOT_CLASS}>
      {props.radios.map((radio, index) =>
        <div className={`${ROOT_CLASS}__radio-wrap`} key={index}>
          <RadioButton
            title={radio}
            index={index}
            onChange={props.onClickRadio}
            isActive={index === props.activeRadio}
          />
        </div>
      )}
    </div>
  );
}
