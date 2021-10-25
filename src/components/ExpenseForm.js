import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionBtn, expenseAPI } from '../actions/index';

class ExpenseForm extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getAPI = this.getAPI.bind(this);
  }

  componentDidMount() {
    this.getAPI();
  }

  getAPI() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  async handleClick() {
    const { dispatchBtnExpense, expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const ExchangeRates = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((result) => result.json());
    this.setState({
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: ExchangeRates,
    });
    dispatchBtnExpense(this.state);
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const categories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input id="value" type="text" value={ value } onChange={ this.handleChange } />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" value={ currency } onChange={ this.handleChange }>
            { currencies.map((coin, index) => (
              <option key={ index }>{ coin }</option>
            )) }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select id="method" value={ method } onChange={ this.handleChange }>
            { paymentMethods.map((payment, index) => (
              <option key={ index }>
                { payment }
              </option>
            )) }
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" value={ tag } onChange={ this.handleChange }>
            {categories.map((category, index) => (
              <option key={ index }>
                { category }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="description" value={ description } onChange={ this.handleChange }>
          Descrição:
          <input id="description" type="text" />
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(expenseAPI()),
  dispatchBtnExpense: (state) => dispatch(actionBtn(state)),
});

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  dispatchBtnExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
