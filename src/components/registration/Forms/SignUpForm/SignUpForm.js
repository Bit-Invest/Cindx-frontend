import React from 'react';
import { Select } from '@registration/select';
// import { Input } from '@registration/input';
import { Input } from '@common/Input';
import { Checkbox } from '@registration/checkbox';
import { Button } from '@components/common/Button';
import { Link } from 'react-router-dom';

export const SignUpForm = props => {
  const { isError } = props;

  return (
    <form
      className="SignUpForms__RegistrationForm"
      onSubmit={props.handleSubmit}>
      <div className="title">Sign Up</div>
      <div className='SignUpForms__RegistrationForm__error-block'>
        {props.errorMessage}
      </div>
      <div className="SignUpForms__select-wrap">
        <Select
          onChange={props.handleEnter}
          name="select"
          theme="sign-up"
          defaultOption={{
            value: 'trader',
            label: 'Trader'
          }}
          options={[
            {
              value: 'trader',
              label: 'Trader'
            },
            {
              value: 'investor',
              label: 'Investor'
            }
          ]}
        />
      </div>
      <div className={`SignUpForms__input-wrap`}>
        <Input
          onChange={props.handleEnter}
          placeholder="Your name"
          type="text"
          required
          isError={props.isErrorName}
          name="name"
        />
      </div>
      <div className={`SignUpForms__input-wrap`}>
        <Input
          onChange={props.handleEnter}
          placeholder="Your surname"
          type="text"
          required
          isError={props.isErrorSurName}
          name="surname"
        />
      </div>
      <div className={`SignUpForms__input-wrap`}>
        <Input
          onChange={props.handleEnter}
          placeholder="Your email"
          type="text"
          required
          isError={props.isErrorEmail}
          name="email"
        />
      </div>
      <div className={`SignUpForms__input-wrap`}>
        <Input
          onChange={props.handleEnter}
          placeholder="Password (min 8 characters)"
          type="password"
          required
          isError={props.isErrorPasword}
          name="password"
        />
      </div>
      <div className="checkboxBlock"
      onClick={props.handleCheckbox}>
        <Checkbox
          checked={props.checked}
          onChange={props.handleCheckbox}
          isError={isError}
        />
        <div>
          I give my consent to process and store my personal data for the
          purpose of verifying my identity.
          <div className="required">* Required</div>
        </div>
      </div>
      <Button theme="gradient-img" NameBtn="Sign Up" preloader={props.preloader} />
      <div className="transitionAccount">
        Already have an account?{' '}
        <Link className='span' to={'/registration/sign-in'}>Sign In</Link>
      </div>
    </form>
  );
};
