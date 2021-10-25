import { EXPENSE_API, BUTTON_ADD } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  exchangeRates: {},
};

// remover as moedas de turismo
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EXPENSE_API:
    return {
      ...state,
      currencies: Object.keys(action.currencies).filter((moeda) => moeda !== 'USDT'),
    };
  case BUTTON_ADD:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: state.expenses.length,
          value: action.expenses.valor,
          description: action.expenses.descricao,
          currency: action.expenses.moeda,
          method: action.expenses.metodo,
          tag: action.expenses.tag,
          exchangeRates: action.expenses.exchangeRates,
        },
      ],
    };
  default:
    return state;
  }
};

export default wallet;
