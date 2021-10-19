import { EXPENSE_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EXPENSE_API:
    return {
      ...state,
      currencies: action.expense,
    };
  default:
    return state;
  }
};

export default wallet;
