import React from 'react';
import expenseAPI from '../service/ExpenseAPI';

class ExpenseForm extends React.Component {
  constructor() {
    super();

    this.state = {
      API: [],
      currency: [],
    };
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input id="value" type="text" name="name" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input id="description" type="text" name="name" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency">Moeda</select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expense">
          Tag:
          <select id="expense">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default ExpenseForm;
