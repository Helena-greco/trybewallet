import React from 'react';
import expenseAPI from '../service/ExpenseAPI';

class ExpenseForm extends React.Component {
  constructor() {
    super();

    this.state = {
      APIresult: [],
    };

    this.getAPIresult = this.getAPIresult.bind(this);
  }

  componentDidMount() {
    this.getAPIresult();
  }

  // remover as moedas de turismo
  async getAPIresult() {
    const result = await expenseAPI();
    this.setState({
      APIresult: result.filter((currency) => currency !== 'USDT'),
    });
  }

  render() {
    const { APIresult } = this.state;
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
          <select id="currency">
            { APIresult.map((coin, index) => (
              <option key={ index }>{ coin }</option>
            )) }
          </select>
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
