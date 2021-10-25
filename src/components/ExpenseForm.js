import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import expenseAPI from '../service/ExpenseAPI';
import { actionBtn } from '../actions/index';

class ExpenseForm extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      allExpenses: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    const walletExpenses = [{
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: ExchangeRates,
    }];
    this.setState({
      allExpenses: [...walletExpenses],
    });
    dispatchBtnExpense(this.state);
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input id="value" type="text" onChange={ this.handleChange } />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" onChange={ this.handleChange }>
            { currencies.map((coin, index) => (
              <option key={ index }>{ coin }</option>
            )) }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expense">
          Tag:
          <select id="expense" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="description" onChange={ this.handleChange }>
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
  dispatchBtnExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
