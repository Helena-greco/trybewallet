// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const BUTTON_ADD = 'BUTTON_ADD';
export const WALLET_DATA = 'WALLET_DATA';

export const emailUser = (email) => ({
  type: USER_EMAIL,
  email,
});

export const walletObj = (data) => ({
  type: WALLET_DATA,
  data,
});

export const actionBtn = (payload) => ({
  type: BUTTON_ADD,
  payload,
});

export function expenseAPI() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    return dispatch(walletObj(data));
  };
}
