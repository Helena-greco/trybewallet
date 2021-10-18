import React from 'react';
import { Link } from 'react-router-dom';
import InputPadrao from '../components/InputPadrão';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabledBtn: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => this.checkEmail());
  }

  checkPassword() {
    const { password } = this.state;
    const minLength = 6;
    if (this.validaEmail() && password.length >= minLength) {
      this.setState({ disabledBtn: false });
    } else {
      this.setState({ disabledBtn: true });
    }
  }

  checkEmail() {
    const { email } = this.state;
    const split = email.split('');
    if (email.includes('@')
      && split[split.length - 1] !== '@'
      && split[split.length - 1] !== '.'
    ) {
      return true;
    }
    return false;
  }

  render() {
    const { email, password, disabledBtn } = this.state;
    return (
      <fieldset>
        <InputPadrao
          data-testid="email-input"
          type="text"
          name="email-input"
          description="Email:"
          handleChange={ this.handleChange }
          value={ email }
        />
        <InputPadrao
          data-testid="password-input"
          type="password"
          name="password-input"
          description="Senha:"
          handleChange={ this.handleChange }
          value={ password }
        />
        <Link to="/carteira">
          <button
            type="submit"
            disabled={ disabledBtn }
            onChange={ this.checkPassword }
          >
            Entrar
          </button>
        </Link>
      </fieldset>
    );
  }
}

export default Login;
