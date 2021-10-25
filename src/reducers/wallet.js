import { WALLET_DATA, BUTTON_ADD } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

// remover as moedas de turismo
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_DATA:
    return {
      ...state,
      currencies: Object.keys(action.data).filter((coin) => coin !== 'USDT'),
    };
  case BUTTON_ADD:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ],
    };
  default:
    return state;
  }
};

export default wallet;
