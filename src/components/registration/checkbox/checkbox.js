import React from 'react';

export const Checkbox = props => {
  const handleCheckboxChange = e => {
    const { onChange } = props;

    onChange && onChange(e);
  };

  return (
    <input
      checked={props.checked}
      type="checkbox"
      onChange={handleCheckboxChange}
      className="checkbox"
    />
  );
};
