const EXPENSE_BASE_URL = 'https://economia.awesomeapi.com.br/json/all';

const expenseAPI = async () => {
  const response = await fetch(EXPENSE_BASE_URL);
  const expenseResponse = await response.json();
  const objCurrencies = Object.keys(expenseResponse);

  return objCurrencies;
};

export default expenseAPI;
