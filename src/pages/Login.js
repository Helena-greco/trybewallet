import React from 'react';
import { Link } from 'react-router-dom';
import InputPadrao from '../components/InputPadrão';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <fieldset>
        <InputPadrao
          data-testid="email-input"
          type="text"
          name="email-input"
          description="Email:"
          value={ email }
          handleChange={ this.handleChange }
        />
        <InputPadrao
          data-testid="password-input"
          type="password"
          name="password-input"
          description="Senha:"
          value={ password }
          handleChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button type="submit">Entrar</button>
        </Link>
      </fieldset>
    );
  }
}

export default Login;
