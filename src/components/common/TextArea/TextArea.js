import * as React from 'react';

const ROOT_CLASS = 'textarea';

export const TextArea = (props) => {
  return (
    <div className={ROOT_CLASS}>
      <textarea
        className={`${ROOT_CLASS}__textarea`}
        onChange={props.onChange}
        {...props.areaProps}
      />
    </div>
  );
}
