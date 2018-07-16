import React from 'react';

const ROOT_CLASS = 'text-area';

export const TextArea = props => {

  const renderRequired = () => {
    if (props.required) {
      return <div className="inputEmail__required">*</div>;
    }
  };

  return (
    <div>
      <textarea
        className={ROOT_CLASS}
        placeholder={props.placeholder}
      />
      {renderRequired()}
    </div>
  );
};
