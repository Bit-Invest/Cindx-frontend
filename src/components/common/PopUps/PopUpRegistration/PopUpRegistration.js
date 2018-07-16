import React from 'react';
import { Button } from '@components/common/Button';
import { Link } from 'react-router-dom';

const ROOT_CLASS = 'pop-up-registration';

export const PopUpRegistration = (props) => {
  return (
    <div className={ROOT_CLASS}>
      <div className={`${ROOT_CLASS}__img`}></div>
      <div className={`${ROOT_CLASS}__content-block`}>
        <div className={`${ROOT_CLASS}__tittle`}>Registration</div>
        <div className={`${ROOT_CLASS}__info`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ...
        </div>
        <Link to={'/registration/sign-up'}>
          <Button className={`${ROOT_CLASS}__button`} theme="theme-gradient-popUp" NameBtn="Join now"/>
        </Link>
        <div className={`${ROOT_CLASS}__sign-in`}>Already have an account?{' '}
        <Link className='span' to={'/registration/sign-in'}>Sign In</Link></div>
      </div>
    </div>
  )
}
