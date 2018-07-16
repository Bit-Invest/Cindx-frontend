import * as React from 'react';

const ROOT_CLASS = 'pop-up-coming-soon';

export const PopUpComingSoon = props => {
  return (
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__img`}></div>
      <div className={`${ROOT_CLASS}__caption`}>Coming Soon...</div>
      <div className={`${ROOT_CLASS}__info`}>This part is still under development. Thank you for your attention.</div>
    </div>
  )
}
