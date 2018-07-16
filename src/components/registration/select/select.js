import React from 'react';

const ROOT_CLASS = 'select';

export const Select = props => {

  const buildRootClass = () => {
    return (
      ROOT_CLASS +
      (props.theme ? ` ${ROOT_CLASS}_${props.theme}` : '')
    );
  };
  return (
    <div
      name={props.name}
      onClick={props.handleSelectChange}
      className={buildRootClass()}
    >
      <div className={`${ROOT_CLASS}__currentValue`}>
        <div className={`${ROOT_CLASS}__value-title`}>
          {props.currentOption.label}
        </div>
        <div className={`${ROOT_CLASS}__arrow`}></div>
      </div>
      <div className={`${ROOT_CLASS}__options ${props.isOpened ? '' : ROOT_CLASS + '__options_closed'}`}>
          {props.options.map((option, index) =>
            <div
              value={option.value}
              label={option.label}
              key={index}
              onClick={(e) => {
                let event = e;
                event.target.value = option.value;
                event.payload =
                  {value: option.value, label: option.label};
                event.target.name = props.name;
                props.onSelect(event)}
              }
              className={`${ROOT_CLASS}__option`}
            >
              {option.label}
            </div>
          )}
      </div>
    </div>
  );
};
