import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  /** https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
   * anyString@anyString.anyString */
  checkEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  render() {
    const { email, password } = this.state;
    const minLength = 6;
    return (
      <fieldset>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
          />
        </label>
        <Link to="/carteira">
          <button
            type="submit"
            disabled={ !(this.checkEmail(email) && password.length >= minLength) }
          >
            Entrar
          </button>
        </Link>
      </fieldset>
    );
  }
}

/** Ref: disabled no button, consultei o repositório do
 * https://github.com/tryber/sd-014-b-project-trybewallet/pull/58/commits/c20af0f7bcd44701409e390d0ce2e55feedddc2a */

export default Login;
