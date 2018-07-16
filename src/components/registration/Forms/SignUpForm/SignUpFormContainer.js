import * as React from 'react';
import { SignUpForm } from './SignUpForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { signUpAction as signUp } from '@store/modules/registration';
import PropTypes from 'prop-types';

const ErrorMessage = {
  EMAIL_ERROR: 'Correct your email',
  CHECKBOX_ERROR: 'Please, give your consent to the processing of your data',
  PASWORD_ERROR: 'Too short password',
  DUBLICATE_EMAIL: 'This email is already used',
  NAME_INPUT: 'First Name',
  SURNAME_INPUT: 'Second Name'
}

class SignUpFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 'trader',
      name: '',
      surname: '',
      email: '',
      password: '',
      checked: true,
      errorMessage: '',
      isErrorEmail: false,
      isErrorPasword: false,
      isErrorName: false,
      isErrorSurName: false,
      preloader: false
    };
  }

  static propTypes = {
    push: PropTypes.func,
    signUp: PropTypes.func
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name === '') {
      this.errorInputName();
    } else if (this.state.surname === '') {
      this.errorInputSurName();
    } else if (this.isErrorInForm()) {
      this.errorInputEmail();
    } else if (!this.state.checked) {
      this.checkboxError();
    } else if (this.state.password.length < 8) {
      this.passwordError();
    } else {
      this.preloaderFunc();
      const data = {
        select: this.state.select,
        name: this.state.name,
        surname: this.state.surname,
        email: this.state.email,
        password: this.state.password
      };
      const { signUp } = this.props;
      signUp(data)
        .then(this.onSuccessSubmit.bind(this))
        .catch(this.onErrorEmailDuplicat.bind(this));
    }
  };

  isErrorInForm() {
    return !(new RegExp(
      "^[A-Za-z0-9][A-Za-z0-9.-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*.)+[A-Za-z]*$"
    ).test(this.state.email));
  }

  preloaderFunc = event => {
    this.setState({preloader: true});
  }

  handleCheckbox = event => {
    this.setState({checked: !this.state.checked});
  }

  errorInputName = event => {
    this.setState({
      isErrorName: true,
      errorMessage: ErrorMessage.NAME_INPUT
    });
  }

  errorInputSurName = event => {
    this.setState({
      isErrorName: false,
      isErrorSurName: true,
      errorMessage: ErrorMessage.SURNAME_INPUT
    });
  }

  errorInputEmail = event => {
    this.setState({
      isErrorSurName: false,
      isErrorEmail: true,
      errorMessage: ErrorMessage.EMAIL_ERROR
    });
  }

  passwordError = event => {
    this.setState({
      isErrorEmail: false,
      isErrorPasword: true,
      errorMessage: ErrorMessage.PASWORD_ERROR
    });
  }

  checkboxError = event => {
    this.setState({errorMessage: ErrorMessage.CHECKBOX_ERROR});
  }

  onSuccessSubmit(res) {
    this.props.push('/registration/sign-in');
  }

  onErrorEmailDuplicat(err) {
    this.errorInputEmail();
    this.setState({
      errorMessage: ErrorMessage.DUBLICATE_EMAIL,
      preloader: false
    });
  }

  handleEnter = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const {
      handleSubmit,
      handleEnter,
      preloaderFunc,
      handleCheckbox
    } = this;
    return <SignUpForm
      handleSubmit={handleSubmit.bind(this)}
      preloaderFunc={preloaderFunc}
      handleEnter={handleEnter}
      handleCheckbox={handleCheckbox}
      errorMessage={this.state.errorMessage}
      preloader={this.state.preloader}
      isErrorEmail={this.state.isErrorEmail}
      isErrorPasword={this.state.isErrorPasword}
      isErrorName={this.state.isErrorName}
      isErrorSurName={this.state.isErrorSurName}
      checked={this.state.checked}
      isError={this.state.isError}
    />;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({push, signUp}, dispatch);

const connectedContainer =
  connect(null, mapDispatchToProps)(SignUpFormContainer);

export {connectedContainer as SignUpFormContainer};
